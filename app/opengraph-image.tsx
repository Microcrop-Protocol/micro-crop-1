import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "MicroCrop — Parametric Crop & Livestock Insurance Infrastructure for Africa";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Decorative top-left accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle at top left, rgba(16,185,129,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Decorative bottom-right accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle at bottom right, rgba(52,211,153,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Leaf icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.5-3 10-8" />
            <path d="M2 2s7 3 10 10" />
            <path d="M22 2c-2 4-6 8-14 10" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          MicroCrop
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#34d399",
            borderRadius: "2px",
            marginBottom: "24px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#a7f3d0",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Parametric Crop & Livestock Insurance Infrastructure for Africa
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 18,
            color: "#6ee7b7",
            opacity: 0.7,
            display: "flex",
          }}
        >
          microcrop.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
