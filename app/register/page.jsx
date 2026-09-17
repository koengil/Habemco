"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Field, Footer, Grow, Hero, Sheet } from "../../components/ui";
import { isValidEmail } from "../../lib/password";

/**
 * Register, step 1 of 3 — RG-1.
 *
 * The legacy Enrollment screens (card number / CVV / Member ID / SSN / date of
 * birth and the calendar picker) are gone. Habemco has already onboarded the
 * card and passed the PRN and email to ENACOMM, so the customer only confirms
 * the email they applied with.
 */
export default function RegisterEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isReady = isValidEmail(email);

  const submit = () => {
    setLoading(true);
    try {
      sessionStorage.setItem("fn:email", email.trim());
    } catch {
      /* private mode — the flow still works, the OTP screen just shows no address */
    }
    setTimeout(() => router.push("/register/verify"), 550);
  };

  return (
    <main className="screen">
      {/* RG-2: back chevron returns to Login. */}
      <Hero
        title="Register"
        sub="Enter the email you used to apply"
        onBack={() => router.push("/login")}
      />

      <Sheet>
        <Field
          id="register-email"
          label="Email"
          placeholder="Enter email"
          value={email}
          onChange={setEmail}
          type="email"
          inputMode="email"
          autoComplete="email"
        />

        <Button disabled={!isReady} loading={loading} onClick={submit}>
          Continue
        </Button>

        <p className="alt-line">
          Already have an account?{" "}
          <button type="button" className="link" onClick={() => router.push("/login")}>
            Login
          </button>
        </p>

        <Grow />
        <Footer />
      </Sheet>
    </main>
  );
}
