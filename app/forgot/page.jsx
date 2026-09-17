"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Field, Grow, Sheet, TopBar } from "../../components/ui";
import { isValidEmail } from "../../lib/password";

/**
 * Forgot Password, email entry — FP-1 / FP-3.
 *
 * FP-1: the Login link comes straight here. The "Select Credential"
 * (Username / Password) sheet and the Forgot Username screens are removed.
 * FP-2: the "Select how to reset your password" step is dropped — both options
 * were acceptable and the doc prefers the shorter path.
 * BR-7: no footer on Forgot Password; the buttons pin to the bottom instead.
 */
export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isReady = isValidEmail(email);

  const submit = () => {
    setLoading(true);
    setTimeout(() => router.push("/forgot/code"), 550);
  };

  return (
    <main className="screen">
      <TopBar title="Forgot Password" onBack={() => router.push("/login")} />

      <Sheet flat>
        <p
          style={{
            margin: "0 0 22px",
            fontSize: 15,
            lineHeight: 1.55,
            color: "var(--text-muted)",
          }}
        >
          Enter the email address on your account and we&apos;ll send you a code to
          reset your password.
        </p>

        <Field
          id="forgot-email"
          label="Email"
          placeholder="Enter email"
          value={email}
          onChange={setEmail}
          type="email"
          inputMode="email"
          autoComplete="email"
        />

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
