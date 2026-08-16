import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Rajnish Barnwal — Digital Transformation Consultant";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        {/* Top Accent Rule & Label */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "64px",
              height: "6px",
              backgroundColor: "#1D4ED8",
              borderRadius: "3px",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#57534E",
              fontWeight: 600,
            }}
          >
            Digital Transformation Consultant · Pune, India
          </div>
        </div>

        {/* Middle Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "52px",
              fontWeight: 700,
              color: "#0C0A09",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Digital transformation that actually gets used.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#57534E",
              lineHeight: 1.4,
              maxWidth: "900px",
            }}
          >
            I help mid-sized companies replace manual work with systems their teams actually use.
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #E7E5E4",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", fontSize: "24px", fontWeight: 700, color: "#0C0A09" }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: "20px", color: "#1D4ED8", fontWeight: 600 }}>
            digitalrajnish.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
