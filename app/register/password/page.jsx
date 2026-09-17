"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  Field,
  Footer,
  Grow,
  Hero,
  PasswordRules,
  Sheet,
} from "../../../components/ui";
import { allRulesMet, passwordRules } from "../../../lib/password";

/**
 * Register, step 3 of 3 — RG-4 / RG-5 / RG-6.
 *
 * RG-5 puts the requirements box directly under Password and above Confirm
 * Password. RG-6: no "Enrollment Successful!" heading, no blue check, no
 * Username field and no 0/30 counter — the username is the email address and is
 * never entered separately.
 */
export default function CreatePasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const rules = passwordRules(password, confirm);
  const isReady = allRulesMet(password, confirm);

  const submit = () => {
    setLoading(true);
    setTimeout(() => router.push("/register/success"), 650);
  };

  return (
    <main className="screen">
      <Hero
        title="Create your password"
        sub="Create your login details"
        onBack={() => router.push("/register/verify")}
      />

      <Sheet>
        <Field
          id="new-password"
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
          password
          autoComplete="new-password"
        />

        <PasswordRules rules={rules} />

        <Field
          id="confirm-password"
          label="Confirm Password"
          placeholder="Enter password"
          value={confirm}
          onChange={setConfirm}
          password
          autoComplete="new-password"
        />

        <Button disabled={!isReady} loading={loading} onClick={submit}>
          Register
        </Button>

        <Grow />
        <Footer />
      </Sheet>
    </main>
  );
}
