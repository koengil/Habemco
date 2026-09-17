"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  Field,
  Grow,
  PasswordRules,
  Sheet,
  TopBar,
} from "../../../components/ui";
import { allRulesMet, passwordRules } from "../../../lib/password";

/**
 * Create new Password — FP-5.
 *
 * Same layout change as the Register step: the requirements box sits directly
 * beneath New Password, and the second field is labelled "Confirm Password",
 * not "Repeat Password".
 */
export default function ForgotNewPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const rules = passwordRules(password, confirm);
  const isReady = allRulesMet(password, confirm);

  const submit = () => {
    setLoading(true);
    setTimeout(() => router.push("/forgot/done"), 650);
  };

  return (
    <main className="screen">
      <TopBar title="Create new Password" onBack={() => router.push("/forgot/code")} />

      <Sheet flat>
        <Field
          id="forgot-new-password"
          label="New Password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
          password
          autoComplete="new-password"
        />

        <PasswordRules rules={rules} />

        <Field
          id="forgot-confirm-password"
          label="Confirm Password"
          placeholder="Enter password"
          value={confirm}
          onChange={setConfirm}
          password
          autoComplete="new-password"
        />

        <Grow />

        <div className="btn-stack" style={{ paddingBottom: 26 }}>
          <Button disabled={!isReady} loading={loading} onClick={submit}>
            Confirm
          </Button>
          <Button variant="outline" onClick={() => router.push("/login")}>
            Cancel
          </Button>
        </div>
      </Sheet>
    </main>
  );
}
