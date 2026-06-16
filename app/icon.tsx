import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050507",
          color: "#00f5ff",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "ui-monospace, monospace",
          border: "2px solid #00f5ff",
          borderRadius: 8,
        }}
      >
        F
      </div>
    ),
    { ...size }
  );
}
