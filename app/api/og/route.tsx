import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Professional Crypto Signals";
    const subtitle = searchParams.get("subtitle") || "Systematic Market Analysis & Risk Management";

    // Load Yaga Calls Brand Logo from local public folder and convert to Base64 data URI
    const logoPath = path.join(process.cwd(), "public/yaga_calls_logo.png");
    const logoBuffer = fs.readFileSync(logoPath);
    const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0A0B0D", // Brand background
            backgroundImage: "radial-gradient(circle at center, #261b0c 0%, #0A0B0D 80%)", // Brand radial glow
            padding: "60px 80px",
            border: "12px solid #E39E2E", // Brand primary gold border
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Glowing accent border line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              backgroundColor: "#E39E2E",
            }}
          />

          {/* Header Brand Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              width: "100%",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoBase64}
              alt="Yaga Calls Logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                border: "3px solid #E39E2E",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  color: "#EAF2FF", // Brand text-high
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                }}
              >
                YAGA CALLS
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#E39E2E", // Brand primary gold
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  marginTop: "2px",
                }}
              >
                Verified Performance &amp; Risk Discipline
              </span>
            </div>
          </div>

          {/* Center Main Text Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 900,
                color: "#EAF2FF", // Brand text-high
                lineHeight: 1.15,
                letterSpacing: "-2px",
                textTransform: "uppercase",
                margin: 0,
                padding: 0,
                fontFamily: "sans-serif",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#A7B0C0", // Brand text-muted
                lineHeight: 1.4,
                marginTop: "16px",
                marginRight: "40px",
                fontFamily: "sans-serif",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Footer Metadata Badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderTop: "2px solid #1E242C", // Brand line color
              paddingTop: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#0F1217", // Brand surface-deep
                  border: "1px solid #1E242C", // Brand line border
                  padding: "6px 16px",
                  borderRadius: "9999px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#A7B0C0", fontFamily: "sans-serif" }}>
                  🤖 TELEGRAM NATIVE
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#0F1217", // Brand surface-deep
                  border: "1px solid #1E242C", // Brand line border
                  padding: "6px 16px",
                  borderRadius: "9999px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#22C55E", fontFamily: "sans-serif" }}>
                  🟢 VERIFIED PERFORMANCE
                </span>
              </div>
            </div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#E39E2E", // Brand primary gold
                letterSpacing: "1px",
                fontFamily: "sans-serif",
              }}
            >
              www.yagacalls.com
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error("OG Image generation failed:", e);
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
