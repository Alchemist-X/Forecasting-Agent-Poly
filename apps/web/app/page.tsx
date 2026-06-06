import type { Metadata } from "next";
import { LiveTradingSnapshot } from "../components/live-trading-snapshot";

export const metadata: Metadata = {
  title: "Live Trading Snapshot",
  description: "Live Polymarket wallet ledger adapted into the live trading snapshot view.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function HomePage() {
  return <LiveTradingSnapshot />;
}
