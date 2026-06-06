import { ImageResponse } from "@vercel/og";

// Next 16 file convention: generates /opengraph-image at build/runtime.
export const runtime = "edge";
export const alt = "Forecasting Agent Poly — AI-managed Polymarket trading";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: inject the latest equity number from equity-history.json once a
// stable build-time loader is in place. Keeping this static for now so
// the asset builds without external data dependencies.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#07090D",
          color: "#E8EDF2",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          position: "relative"
        }}
      >
        {/* 4px brand gradient bar at top */}
        <div
          style={{
            width: "100%",
            height: 4,
            background: "linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)"
          }}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 96px"
          }}
        >
          {/* Vertical lockup: mark over wordmark, left-aligned */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 20,
                background: "linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 28
              }}
            >
              <svg viewBox="0 0 64 64" width={64} height={64} fill="none" stroke="#ffffff" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 48H52" />
                <path d="M12 48V14" />
                <path d="M16 42L28 31L38 35L52 18" />
                <path d="M45 18H52V25" />
              </svg>
            </div>
            <div
              style={{
                fontSize: 88,
                fontWeight: 700,
                letterSpacing: 0,
                color: "#E8EDF2"
              }}
            >
              forecasting-agent-poly
            </div>
          </div>

          <div
            style={{
              fontSize: 36,
              color: "#A0ADBA",
              maxWidth: 880,
              lineHeight: 1.3
            }}
          >
            AI-managed Polymarket trading
          </div>

          <div
            style={{
              marginTop: 48,
              fontSize: 22,
              color: "#6B7785",
              letterSpacing: "0.02em"
            }}
          >
            non-custodial · session-key only · live track record
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
