"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  Footer,
  Grow,
  Hero,
  Message,
  OtpInput,
  Resend,
  Sheet,
} from "../../../components/ui";

/** The code the prototype accepts. Matches the filled frame in the Figma flow. */
const VALID_CODE = "7336";

/**
 * Register, step 2 of 3 — RG-3.
 *
 * The emailed passcode is the initial credential; there is no separate
 * temporary-password screen. Keeps the textured header, back chevron and footer
 * of the Register screen so the three steps read as one flow, and borrows only
 * the code boxes, countdown and buttons from the Forgot Password code screen.
 */
export default function VerifyEmailPage() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const digits = code.replace(/\s/g, "");
  const isReady = digits.length === 4;

  const onCode = (v) => {
    if (error) setError("");
    setCode(v);
  };

  const submit = () => {
    if (digits !== VALID_CODE) {
      setError("Invalid code. Please try again.");
      return;
    }
    setLoading(true);
    setTimeout(() => router.push("/register/password"), 550);
  };

  return (
    <main className="screen">
      {/* RG-3 copy, as specified. */}
      <Hero
        title="Verify your email"
        sub="Enter the code sent to your email"
        onBack={() => router.push("/register")}
      />

      <Sheet>
        <OtpInput value={code} onChange={onCode} error={!!error} />

        <div style={{ marginTop: 14 }}>
          <Message text={error} />
        </div>

        <Resend seconds={300} onResend={() => setCode("")} />

        <div className="btn-stack" style={{ marginTop: 22 }}>
          <Button disabled={!isReady} loading={loading} onClick={submit}>
            Continue
          </Button>
          {/* RG-3: Cancel returns to Login. */}
          <Button variant="outline" onClick={() => router.push("/login")}>
            Cancel
          </Button>
        </div>

        <Grow />
        <Footer />
      </Sheet>
    </main>
  );
}
