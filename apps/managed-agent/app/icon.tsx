import { ImageResponse } from "next/og";

// Next 16 file convention: serves /icon as a generated favicon.
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
          background: "linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)",
          borderRadius: 6
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width={22}
          height={22}
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
