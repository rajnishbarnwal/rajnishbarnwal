"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { siteConfig } from "@/lib/site";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CalEmbed() {
  const calUsername = siteConfig.calUsername;

  useEffect(() => {
    if (calUsername) {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          styles: { branding: { brandColor: "#1D4ED8" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })();
    }
  }, [calUsername]);

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-[22px] sm:text-[24px] font-semibold text-[#0C0A09]">
          Or just book a time
        </h2>
        <p className="mt-1 text-[15px] text-[#57534E]">
          Thirty minutes, no pitch. If I&apos;m not the right person for the problem, I&apos;ll say so.
        </p>
      </div>

      {calUsername ? (
        <div className="rounded-[8px] border border-[#E7E5E4] bg-white overflow-hidden min-h-[580px]">
          <Cal
            calLink={calUsername}
            style={{ width: "100%", height: "100%", minHeight: "580px" }}
            config={{ layout: "month_view" }}
          />
        </div>
      ) : (
        <Card className="border border-[#E7E5E4] bg-[#FAFAF9] p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF] text-[#1D4ED8]">
              <Calendar className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-[19px]">Request a discovery call</CardTitle>
          <CardDescription className="mt-2 max-w-[42ch] mx-auto text-[15px]">
            Send an email with a few times that work for you, or use the enquiry form. I will confirm a slot within one working day.
          </CardDescription>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild>
              <a
                href={`mailto:${siteConfig.email}?subject=Discovery%20Call%20Request`}
                className="w-full sm:w-auto"
              >
                Email for a slot
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
