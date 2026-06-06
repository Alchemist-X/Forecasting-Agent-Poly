"use client";

import Link from "next/link";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { Button, LinkButton } from "./ui";

export function TopBar() {
  const { authenticated, ready, login, logout, user } = usePrivy();
  const router = useRouter();

  const handleSignIn = () => {
    if (authenticated) {
      router.push("/dashboard");
    } else {
      login();
    }
  };

  return (
    <header className="topbar">
      <Link href="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 64 64" width={18} height={18} fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 48H52" />
            <path d="M12 48V14" />
            <path d="M16 42L28 31L38 35L52 18" />
            <path d="M45 18H52V25" />
          </svg>
        </span>
        <span>Forecasting Agent Poly</span>
      </Link>
      <div className="topbar-actions">
        {ready && authenticated ? (
          <>
            <LinkButton href="/dashboard" variant="ghost">
              Dashboard
            </LinkButton>
            <Button
              onClick={() => logout()}
              title={user?.email?.address ?? user?.wallet?.address ?? "Sign out"}
            >
              Sign out
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={handleSignIn} disabled={!ready}>
            {ready ? "Sign in" : "Loading…"}
          </Button>
        )}
      </div>
    </header>
  );
}
