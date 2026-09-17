"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaceIdIcon, FingerprintIcon } from "../../components/icons";
import { Button, Field, Footer, Grow, Hero, Message, Sheet } from "../../components/ui";
import { isValidEmail } from "../../lib/password";

/**
 * Login — Section 5.1.
 *
 * LG-1 Email replaces Username, no asterisks.
 * LG-2 A single "Forgot password", right-aligned, body-text colour.
 * LG-3 "Log in" replaces "Get Started"; disabled until the form is valid, which
 *      is how the live app gates it (isDirty && isValid && !error).
 * LG-4 "Don't have an account? Register" replaces the "Enroll" link.
 * LG-5 Face ID, with an Android Biometric variant.
 * LG-8 No language toggle (BR-9).
 */
export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState("ios");

  const isReady = isValidEmail(email) && password.length > 0;

  /* Typing clears the error, mirroring handleUsernameChange / handlePasswordChange. */
  const edit = (setter) => (v) => {
    if (error) setError("");
    setter(v);
  };

  const signIn = () => {
    setLoading(true);
    setTimeout(() => router.push("/home"), 650);
  };

  const biometric = () => {
    setLoading(true);
    setTimeout(() => router.push("/home"), 500);
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
          onChange={edit(setEmail)}
          type="email"
          inputMode="email"
          autoComplete="username"
          error={!!error}
        />

        <Field
          id="login-password"
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={edit(setPassword)}
          password
          autoComplete="current-password"
          error={!!error}
        />

        <Message text={error} />

        <div className="forgot-row">
          <button
            type="button"
            className="forgot-link"
            onClick={() => router.push("/forgot")}
          >
            Forgot password
          </button>
        </div>

        <Button disabled={!isReady} loading={loading} onClick={signIn}>
          Log in
        </Button>

        <p className="alt-line">
          Don&apos;t have an account?{" "}
          <button type="button" className="link" onClick={() => router.push("/register")}>
            Register
          </button>
        </p>

        <button type="button" className="biometric" onClick={biometric}>
          {platform === "ios" ? <FaceIdIcon /> : <FingerprintIcon />}
          <span>{platform === "ios" ? "Face ID" : "Biometric"}</span>
        </button>

        {/* LG-5 asks for an Android variant frame; in code it is one switch. */}
        <div className="platform-toggle" role="group" aria-label="Biometric variant">
          {["ios", "android"].map((p) => (
            <button
              key={p}
              type="button"
              className={
                platform === p
                  ? "platform-toggle__btn platform-toggle__btn--on"
                  : "platform-toggle__btn"
              }
              onClick={() => setPlatform(p)}
            >
              {p === "ios" ? "iOS · Face ID" : "Android · Biometric"}
            </button>
          ))}
        </div>

        <Grow />
        <Footer />
      </Sheet>
    </main>
  );
}
