"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const clientFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email address"),
  company: z.string().optional(),
  message: z
    .string()
    .min(20, "Please describe the problem in at least 20 characters"),
  website: z.string().optional(), // Honeypot
});

type FormValues = z.infer<typeof clientFormSchema>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setServerError(null);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (data.company) formData.append("company", data.company);
    formData.append("message", data.message);
    if (data.website) formData.append("website", data.website);

    startTransition(async () => {
      try {
        const response = await submitContactForm({ success: false }, formData);
        if (response.success) {
          setIsSuccess(true);
          reset();
        } else {
          setServerError(response.message || "Failed to submit. Please email directly.");
          toast.error("Could not send enquiry", {
            description: (
              <span>
                Please email directly at{" "}
                <a
                  href={`mailto:${siteConfig.email}?subject=Project%20Enquiry`}
                  className="underline font-semibold"
                >
                  {siteConfig.email}
                </a>
              </span>
            ),
          });
        }
      } catch {
        setServerError("A network error occurred. Please email directly.");
        toast.error("Network Error", {
          description: (
            <span>
              Please reach out directly to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline font-semibold"
              >
                {siteConfig.email}
              </a>
            </span>
          ),
        });
      }
    });
  };

  if (isSuccess) {
    return (
      <div className="rounded-[8px] border border-[#BFDBFE] bg-[#EFF6FF] p-8 sm:p-10 text-center animate-in fade-in duration-200">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1D4ED8] text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-[22px] font-semibold text-[#0C0A09]">
          Message received
        </h3>
        <p className="mt-2 text-[16px] text-[#57534E] max-w-[44ch] mx-auto">
          Thanks — I&apos;ll review your details and reply within one working day.
        </p>
        <div className="mt-6">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsSuccess(false)}
          >
            Send another note
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      aria-label="Contact inquiry form"
    >
      {/* Honeypot field - visually hidden */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {serverError && (
        <div className="flex items-center gap-2 rounded-[8px] border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Your name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          placeholder="e.g. Vikram Sharma"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-600 font-medium">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Work email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="vikram@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-600 font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div className="space-y-2">
        <Label htmlFor="company">
          Company name <span className="text-[#A8A29E] font-normal">(optional)</span>
        </Label>
        <Input
          id="company"
          placeholder="e.g. Acme Infra Pvt Ltd"
          {...register("company")}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          What are you trying to fix? <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell me about the process, what software you use today, and where people spend the most manual time..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-12 text-base font-semibold"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending enquiry...
          </>
        ) : (
          "Send message"
        )}
      </Button>

      <p className="text-[13px] text-[#A8A29E] text-center">
        No sales spam. Direct response from Rajnish within one business day.
      </p>
    </form>
  );
}
