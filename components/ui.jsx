"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AlertIcon,
  ChevronLeft,
  Eye,
  HelpIcon,
  HomeIcon,
  StatusIcons,
  TickOff,
  TickOn,
  UserIcon,
} from "./icons";

/* ---------------------------------------------------------------- chrome --- */

export function StatusBar({ tone = "dark" }) {
  return (
    <div className={tone === "light" ? "statusbar statusbar--light" : "statusbar"}>
      <span>9:41</span>
      <span>
        <StatusIcons />
      </span>
    </div>
  );
}

/** BR-2 textured header — Login, the three Register steps, Registration Successful. */
export function Hero({ title, sub, onBack }) {
  return (
    <header className="hero">
      <StatusBar />
      {onBack ? (
        <button type="button" className="hero__back" onClick={onBack} aria-label="Back">
          <ChevronLeft />
        </button>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero__logo" src="/logo-white.png" alt="First Native" />
      {title ? <h1 className="hero__title">{title}</h1> : null}
      {sub ? <p className="hero__sub">{sub}</p> : null}
    </header>
  );
}

/**
 * BR-2 solid navy bar — Forgot Password and every post-login screen.
 * `right` replaces the default help icon; PL-2 puts Contact Support there on
 * Transaction History.
 */
export function TopBar({ title, onBack, right }) {
  return (
    <header className="bar">
      <StatusBar />
      <div className="bar__row">
        {onBack ? (
          <button type="button" className="bar__btn" onClick={onBack} aria-label="Back">
            <ChevronLeft />
          </button>
        ) : (
          <span />
        )}
        <h1 className="bar__title">{title}</h1>
        {right ?? (
          <button type="button" className="bar__btn" aria-label="Help">
            <HelpIcon />
          </button>
        )}
      </div>
    </header>
  );
}

/**
 * F-8: Home, FAQ and Profile navigate between their screens from any
 * post-login screen.
 */
export function TabBar({ active }) {
  const router = useRouter();
  const items = [
    { key: "home", label: "Home", href: "/home", Icon: HomeIcon },
    { key: "faq", label: "FAQ", href: "/faq", Icon: HelpIcon },
    { key: "profile", label: "Profile", href: "/profile", Icon: UserIcon },
  ];
  return (
    <nav className="tabbar">
      {items.map(({ key, label, href, Icon }) => (
        <button
          key={key}
          type="button"
          className={active === key ? "tabbar__item tabbar__item--on" : "tabbar__item"}
          onClick={() => router.push(href)}
          aria-current={active === key ? "page" : undefined}
        >
          <Icon />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export function Sheet({ children, flat = false }) {
  return <div className={flat ? "sheet sheet--flat" : "sheet"}>{children}</div>;
}

export function Grow() {
  return <div className="grow" />;
}

/** BR-7. Links are non-functional in the prototype, as specified. */
export function Footer() {
  const stop = (e) => e.preventDefault();
  return (
    <footer className="footer">
      <p className="footer__links">
        <a href="#" onClick={stop}>
          Privacy Policy
        </a>
        <span className="footer__sep">|</span>
        <a href="#" onClick={stop}>
          Terms &amp; Conditions
        </a>
        <span className="footer__sep">|</span>
        <a href="#" onClick={stop}>
          Help
        </a>
      </p>
      <p className="footer__copy">© 2026 First Native, LLC. All rights reserved.</p>
    </footer>
  );
}

/* -------------------------------------------------------------- controls --- */

/** BR-5: no required asterisks anywhere. */
export function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  password = false,
  type = "text",
  inputMode,
  autoComplete,
  maxLength,
  error = false,
}) {
  const [show, setShow] = useState(false);
  const cls = [
    "field__input",
    password ? "field__input--eye" : "",
    error ? "field__input--error" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <div className="field__wrap">
        <input
          id={id}
          className={cls}
          type={password ? (show ? "text" : "password") : type}
          value={value}
          placeholder={placeholder}
          inputMode={inputMode}
          autoComplete={autoComplete}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
        />
        {password ? (
          <button
            type="button"
            className="field__eye"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            <Eye off={show} />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function Message({ text, tone = "error" }) {
  if (!text) return null;
  return (
    <p className={`msg msg--${tone}`}>
      <AlertIcon />
      <span>{text}</span>
    </p>
  );
}

/** Variants mirror packages/app/components/ui/button.tsx. */
export function Button({
  children,
  variant = "default",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <span className="spinner" aria-hidden="true" /> : children}
    </button>
  );
}

/* ------------------------------------------------------ password rules --- */

export function PasswordRules({ rules }) {
  return (
    <ul className="reqs">
      {rules.map((r) => (
        <li key={r.label} className={r.ok ? "reqs__item reqs__item--ok" : "reqs__item"}>
          <span className="reqs__icon" style={r.ok ? { color: "var(--success)" } : undefined}>
            {r.ok ? <TickOn /> : <TickOff />}
          </span>
          {r.label}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ OTP --- */

/**
 * Four-box code entry. Auto-advances on input, steps back on Backspace, and
 * accepts a pasted code — the behaviours the native otp-input provides.
 */
export function OtpInput({ value, onChange, error = false, length = 4, mask = false }) {
  const refs = useRef([]);

  const setDigit = (i, raw) => {
    const digits = raw.replace(/\D/g, "");
    if (!digits) {
      const next = value.split("");
      next[i] = "";
      onChange(next.join("").replace(/\s/g, ""));
      return;
    }
    if (digits.length > 1) {
      const chars = digits.slice(0, length).split("");
      onChange(chars.join(""));
      refs.current[Math.min(chars.length, length - 1)]?.focus();
      return;
    }
    const next = value.padEnd(length, " ").split("");
    next[i] = digits;
    onChange(next.join("").trimEnd());
    if (i < length - 1) refs.current[i + 1]?.focus();
  };

  const onKeyDown = (i, e) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      e.preventDefault();
      const next = value.padEnd(length, " ").split("");
      next[i - 1] = "";
      onChange(next.join("").trimEnd());
      refs.current[i - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < length - 1) refs.current[i + 1]?.focus();
  };

  return (
    <div className="otp">
      {Array.from({ length }).map((_, i) => {
        const ch = value[i] && value[i] !== " " ? value[i] : "";
        const cls = [
          "otp__box",
          error ? "otp__box--error" : ch ? "otp__box--filled" : "",
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <input
            key={i}
            id={`otp-${i}`}
            ref={(el) => (refs.current[i] = el)}
            className={cls}
            value={mask && ch ? "•" : ch}
            inputMode="numeric"
            autoComplete={mask ? "off" : "one-time-code"}
            maxLength={length}
            aria-label={`Digit ${i + 1}`}
            onChange={(e) => setDigit(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
          />
        );
      })}
    </div>
  );
}

/** "No code yet? Request a new code in 05:00" — RG-3 / FP-4. */
export function Resend({ seconds = 300, onResend }) {
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    if (left <= 0) return undefined;
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <p className="resend">
      No code yet?{" "}
      <button
        type="button"
        className="resend__btn"
        disabled={left > 0}
        onClick={() => {
          setLeft(seconds);
          onResend?.();
        }}
      >
        Request a new code
      </button>
      {left > 0 ? (
        <>
          {" "}
          in <strong>{`${mm}:${ss}`}</strong>
        </>
      ) : null}
    </p>
  );
}

export function Toast({ children }) {
  return (
    <div className="toast" role="status">
      {children}
    </div>
  );
}

/**
 * Bottom sheet. The live app runs card activation and the unlock confirmation
 * as sheets over Card Details rather than as pushed screens, so the prototype
 * does the same.
 */
export function Sheet_Bottom({ title, sub, children, onDismiss, labelledBy }) {
  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={labelledBy || title}>
      <button
        type="button"
        className="overlay__scrim"
        aria-label="Close"
        onClick={onDismiss}
      />
      <div className="overlay__sheet">
        <span className="overlay__grip" />
        {title ? <h2 className="overlay__title">{title}</h2> : null}
        {sub ? <p className="overlay__sub">{sub}</p> : null}
        {children}
      </div>
    </div>
  );
}
