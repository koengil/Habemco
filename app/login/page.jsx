"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FaceIdIcon, FingerprintIcon } from "../../components/icons";
import { Button, Field, Footer, Grow, Hero, Sheet } from "../../components/ui";
import { isValidEmail } from "../../lib/password";

/**
 * Login — Section 5.1.
 *
 * LG-1 Email replaces Username, no asterisks.
 * LG-2 A single "Forgot password", right-aligned, body-text colour, no underline.
 * LG-3 "Log in" replaces "Get Started"; disabled until the form is valid, which
 *      is how the live app gates it (isDirty && isValid && !error).
 * LG-4 "Don't have an account? Register" replaces the "Enroll" link.
 * LG-5 Face ID is the primary variant. The Android "Biometric" variant is a
 *      separate frame in the Figma build; here it is the same screen rendered
 *      with ?platform=android, so the shipped screen carries no extra control.
 * LG-8 No language toggle (BR-9).
 * LG-9 The locked-account error state is optional and not part of the positive
 *      flow, so this screen has no error path.
 */
export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    try {
      setIsAndroid(
        new URLSearchParams(window.location.search).get("platform") === "android"
      );
    } catch {
      setIsAndroid(false);
    }
  }, []);

  const isReady = isValidEmail(email) && password.length > 0;

  const go = () => {
    setLoading(true);
    setTimeout(() => router.push("/home"), 600);
  };

  return (
    <main className="screen">
      <Hero title="Welcome!" sub="Enter your credentials" />

      <Sheet>
        <Field
          id="login-email"
          label="Email"
          placeholder="Enter email"
          value={email}
          onChange={setEmail}
          type="email"
          inputMode="email"
          autoComplete="username"
        />

        <Field
          id="login-password"
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
          password
          autoComplete="current-password"
        />

        <div className="forgot-row">
          <button
            type="button"
            className="forgot-link"
            onClick={() => router.push("/forgot")}
          >
            Forgot password
          </button>
        </div>

        <Button disabled={!isReady} loading={loading} onClick={go}>
          Log in
        </Button>

        <p className="alt-line">
          Don&apos;t have an account?{" "}
          <button type="button" className="link" onClick={() => router.push("/register")}>
            Register
          </button>
        </p>

        <button type="button" className="biometric" onClick={go}>
          {isAndroid ? <FingerprintIcon /> : <FaceIdIcon />}
          <span>{isAndroid ? "Biometric" : "Face ID"}</span>
        </button>

        <Grow />
        <Footer />
      </Sheet>
    </main>
  );
}
