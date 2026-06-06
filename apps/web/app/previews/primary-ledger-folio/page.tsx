import type { Metadata } from "next";
import { LiveTradingSnapshot } from "../../../components/live-trading-snapshot";

export const metadata: Metadata = {
  title: "Primary snapshot preview - Folio",
  description: "Editorial-style preview for the Primary Polymarket trading snapshot."
};

export default function PrimaryLedgerFolioPreviewPage() {
  return <LiveTradingSnapshot as="div" variant="folio" />;
}
