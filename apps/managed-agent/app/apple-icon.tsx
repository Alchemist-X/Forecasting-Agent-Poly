import { ImageResponse } from "next/og";

// Next 16 file convention: serves /apple-icon for iOS home-screen.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)",
          borderRadius: 36
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width={120}
          height={120}
          fill="none"
          stroke="#ffffff"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 48H52" />
          <path d="M12 48V14" />
          <path d="M16 42L28 31L38 35L52 18" />
          <path d="M45 18H52V25" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
