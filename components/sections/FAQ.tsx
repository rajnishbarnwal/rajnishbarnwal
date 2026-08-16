"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you price work?",
    answer:
      "Per project, after a free discovery call. Every business's processes are different enough that a standard price list would be dishonest. You'll get a fixed quote with defined scope before anything starts — no hourly surprises.",
  },
  {
    question: "We're not a tech company. Is our team going to be able to use this?",
    answer:
      "That's the actual job. I start by watching how your team works today and build around it. If a system needs a training programme to survive, it's badly designed.",
  },
  {
    question: "Do we have to replace our existing software?",
    answer:
      "Usually no. Most of the value comes from connecting what you already own and removing the manual steps between systems.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes, with clients across India. I'm based in Pune, and for discovery and rollout phases I prefer to be on site at least once — you learn more in an hour on the floor than in five calls.",
  },
  {
    question: "What size company do you usually work with?",
    answer:
      "Companies large enough to feel operational pain but without a full internal IT team — typically 50 to 500 people.",
  },
  {
    question: "What happens after the project ends?",
    answer:
      "You own everything: code, credentials, documentation. I hand over properly so you're not dependent on me. Advisory support afterwards is optional, never required.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
