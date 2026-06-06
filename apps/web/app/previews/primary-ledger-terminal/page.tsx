import type { Metadata } from "next";
import { LiveTradingSnapshot } from "../../../components/live-trading-snapshot";

export const metadata: Metadata = {
  title: "Primary snapshot preview - Terminal",
  description: "Operator-terminal preview for the Primary Polymarket trading snapshot."
};

export default function PrimaryLedgerTerminalPreviewPage() {
  return <LiveTradingSnapshot as="div" variant="terminal" />;
}
