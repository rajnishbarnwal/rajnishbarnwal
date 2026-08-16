"use server";

import { z } from "zod";
import { Resend } from "resend";
import { headers } from "next/headers";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email address"),
  company: z.string().optional(),
  message: z
    .string()
    .min(20, "Please provide at least 20 characters describing what you are trying to fix"),
  website: z.string().optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

// In-memory rate limiting (3 submissions per IP per hour)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limitData = rateLimitMap.get(ip);

  if (!limitData || now > limitData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600 * 1000 });
    return true;
  }

  if (limitData.count >= 3) {
    return false;
  }

  limitData.count += 1;
  return true;
}

export async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    message: formData.get("message"),
    website: formData.get("website") || undefined,
  };

  // 1. Honeypot check
  if (rawData.website && typeof rawData.website === "string" && rawData.website.trim().length > 0) {
    // Silently return success for spam bot
    return {
      success: true,
      message: "Thanks — I'll reply within one working day.",
    };
  }

  // 2. Validate data
  const validated = contactSchema.safeParse(rawData);
  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
    };
  }

  // 3. IP Rate limiting
  try {
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return {
        success: false,
        message: "Too many requests. Please try again in an hour or email directly.",
      };
    }
  } catch {
    // If headers resolution fails, proceed safely
  }

  // 4. Send email via Resend
  const { name, email, company, message } = validated.data;
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || "officialrajnishmail@gmail.com";

  if (!apiKey) {
    // In dev / unconfigured mode, succeed gracefully without crashing
    return {
      success: true,
      message: "Thanks — I'll reply within one working day.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Rajnish Website <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `New enquiry from ${name} — digitalrajnish.com`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`,
    });

    if (result.error) {
      return {
        success: false,
        message: "Failed to send message via email gateway. Please email directly.",
      };
    }

    return {
      success: true,
      message: "Thanks — I'll reply within one working day.",
    };
  } catch {
    return {
      success: false,
      message: "An unexpected error occurred. Please reach out directly via email.",
    };
  }
}
