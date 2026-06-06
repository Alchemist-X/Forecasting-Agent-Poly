import { Hero, LinkButton, Panel } from "../../components/ui";

export default function TrackRecordPage() {
  return (
    <div>
      <Hero
        style={{ paddingTop: 32 }}
        title="Live track record"
        subtitle="Forecasting Agent Poly's flagship account (Primary) has been trading Polymarket on-chain since inception. The full live dashboard — every position, every fill, every reasoning report — lives at the Forecasting Agent Poly observatory below."
        actions={
          <>
            <LinkButton
              href="https://forecasting-agent-poly.vercel.app"
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              Open live dashboard
            </LinkButton>
            <LinkButton href="/signup">Sign up for managed</LinkButton>
          </>
        }
      />

      <Panel title="Why a separate dashboard?">
        <p style={{ color: "var(--text-soft)" }}>
          The Forecasting Agent Poly observatory shows the public Primary wallet — the same AI engine that will
          trade on your behalf when you sign up here. It runs independently and predates this
          managed product. Cross-check the on-chain Safe address there to verify Forecasting Agent Poly&apos;s
          performance is real, not stage-managed.
        </p>
      </Panel>
    </div>
  );
}
