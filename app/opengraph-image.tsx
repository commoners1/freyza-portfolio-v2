import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #050507 0%, #0a0a0f 50%, #120818 100%)",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#00f5ff",
            marginBottom: 24,
          }}
        >
          FREYZA_DEV
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.65)",
            marginBottom: 32,
            maxWidth: 800,
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 760,
            lineHeight: 1.5,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
