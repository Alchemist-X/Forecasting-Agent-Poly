import type { Metadata } from "next";
import { LiveTradingSnapshot } from "../../../components/live-trading-snapshot";

export const metadata: Metadata = {
  title: "Primary snapshot preview - Exchange",
  description: "Brokerage-board preview for the Primary Polymarket trading snapshot."
};

export default function PrimaryLedgerExchangePreviewPage() {
  return <LiveTradingSnapshot as="div" variant="exchange" />;
}
