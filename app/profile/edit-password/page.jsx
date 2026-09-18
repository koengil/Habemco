"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { BigCheck } from "../../../components/icons";
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
 * Edit Password — PL-8, and the tail of F-8:
 * Profile > Edit Password > All done > Go to Home.
 *
 * PL-8 applies the same layout change as FP-5: the requirements box sits
 * directly under New Password, and the confirm field is labelled
 * "Confirm New Password", not "Repeat New Password".
 */
export default function EditPasswordPage() {
  const router = useRouter();

  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const rules = passwordRules(password, confirm);
  const isReady = current.length > 0 && allRulesMet(password, confirm);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 650);
  };

  if (done) {
    return (
      <main className="screen">
        <TopBar title="Edit Password" />
        <Sheet flat>
          <div className="done">
            <div className="done__badge">
              <BigCheck />
            </div>
            <h1 className="done__title">All done!</h1>
            <p className="done__body">Your password has been successfully changed!</p>
          </div>
          <Grow />
          <div style={{ paddingBottom: 26 }}>
            <Button onClick={() => router.push("/home")}>Go to Home</Button>
          </div>
        </Sheet>
      </main>
    );
  }

  return (
    <main className="screen">
      <TopBar title="Edit Password" onBack={() => router.push("/profile")} />

      <Sheet flat>
        <Field
          id="current-password"
          label="Current Password"
          placeholder="Enter password"
          value={current}
          onChange={setCurrent}
          password
          autoComplete="current-password"
        />

        <Field
          id="edit-new-password"
          label="New Password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
          password
          autoComplete="new-password"
        />

        <PasswordRules rules={rules} />

        <Field
          id="edit-confirm-password"
          label="Confirm New Password"
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
          <Button variant="outline" onClick={() => router.push("/profile")}>
            Cancel
          </Button>
        </div>
      </Sheet>
    </main>
  );
}
