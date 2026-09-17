"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  Grow,
  Message,
  OtpInput,
  Resend,
  Sheet,
  TopBar,
} from "../../../components/ui";

const VALID_CODE = "7336";

/** Forgot Password, code entry — FP-4. */
export default function ForgotCodePage() {
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
    setTimeout(() => router.push("/forgot/password"), 550);
  };

  return (
    <main className="screen">
      <TopBar title="Forgot Password" onBack={() => router.push("/forgot")} />

      <Sheet flat>
        <p
          style={{
            margin: "0 0 4px",
            fontSize: 15,
            lineHeight: 1.55,
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          Enter the code sent to your email
        </p>

        <OtpInput value={code} onChange={onCode} error={!!error} />

        <div style={{ marginTop: 14 }}>
          <Message text={error} />
        </div>

        <Resend seconds={300} onResend={() => setCode("")} />

        <Grow />

        <div className="btn-stack" style={{ paddingBottom: 26 }}>
          <Button disabled={!isReady} loading={loading} onClick={submit}>
            Continue
          </Button>
          <Button variant="outline" onClick={() => router.push("/login")}>
            Cancel
          </Button>
        </div>
      </Sheet>
    </main>
  );
}
