"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { STATUS_LABEL, useCards } from "../../../components/CardsProvider";
import {
  AppleIcon,
  BigCheck,
  CardOffIcon,
  CheckOnFill,
  ChevronRight,
  EditIcon,
  LimitsIcon,
  MailIcon,
  PhoneIcon,
  StatusDotIcon,
  SwapIcon,
  TravelIcon,
  UnlockIcon,
} from "../../../components/icons";
import {
  Button,
  Message,
  OtpInput,
  Sheet_Bottom,
  Toast,
  TopBar,
} from "../../../components/ui";

/** The code the prototype accepts, matching the Register and Forgot flows. */
const VALID_CODE = "7336";

/**
 * Card Details, and the card flows.
 *
 * Row sets follow `cardDetailsPresetsCardOnly` in the live app:
 *   Active    → status, managePin, addToApplePayOrGooglePlay, suspendLostStolen, replaceCard
 *   Suspended → status, unblockCard, replaceCard
 *   Shipped   → status
 *
 * Adjusted per the doc:
 *   PL-4  "Add to Apple Pay" is renamed "Add to mobile wallet".
 *   PL-5  A Shipped physical card shows the *virtual* card's art with its
 *         number visible rather than a blurred card, and keeps the
 *         "Got your card? Activate Now!" prompt tied to the physical card.
 *         The live app hides the card entirely on Shipped (hideInfoCard: true),
 *         so this is a deliberate change.
 *   OQ-5  The visible card is labelled "Virtual Card" so the CVV step in F-4
 *         does not read as asking for a code already on screen.
 *   PL-6  Activate: CVV → Set a PIN → Confirm PIN → Card Details with the
 *         green "Card activated!" toast. Run as sheets over this screen,
 *         matching the live app's activation modal flow.
 *   PL-7  Unblock: the Unblock Card row → the Unlock Card confirmation sheet
 *         → Card Details (Active).
 *
 * The doc's state note says not to build post-flow Home variants, which is a
 * Figma-frames constraint. In code the status genuinely changes, so Home
 * reflects the result and the flows can be run again from the header.
 */
export default function CardDetails({ id }) {
  const router = useRouter();
  const { getCard, setStatus } = useCards();
  const card = getCard(id);

  /*
   * Steps mirror the live app's two flows:
   *   activation  cvv -> setPin -> confirmPin            (use-card-activation-flow.ts)
   *   manage pin  pinMethod -> pinCode -> pinNew -> pinConfirm -> pinDone
   *                                                      (use-manage-pin-flow.ts)
   * plus 'unlock' for F-5's confirmation sheet.
   */
  const [step, setStep] = useState("closed");
  const [cvv, setCvv] = useState("");
  const [pin, setPin] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pinError, setPinError] = useState("");
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [pinChannel, setPinChannel] = useState("email");
  const [toast, setToast] = useState("");

  const onCodeChange = (v) => {
    if (codeError) setCodeError("");
    setCode(v);
  };

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(""), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  if (!card) {
    return (
      <main className="screen">
        <TopBar title="Card Details" onBack={() => router.push("/home")} />
        <div className="stub">
          <p className="stub__title">Card not found</p>
          <Button variant="outline" onClick={() => router.push("/home")}>
            Back to Home
          </Button>
        </div>
      </main>
    );
  }

  /* PL-5 / OQ-5: a Shipped physical card displays the virtual card's details. */
  const displayed =
    card.status === "shipped" && card.showsVirtual
      ? getCard(card.showsVirtual) || card
      : card;

  const closeFlow = () => {
    setStep("closed");
    setCvv("");
    setPin("");
    setConfirm("");
    setPinError("");
    setCode("");
    setCodeError("");
  };

  const finishActivation = () => {
    setStatus(card.id, "active");
    closeFlow();
    setToast("Card activated!");
  };

  const confirmUnlock = () => {
    setStatus(card.id, "active");
    closeFlow();
  };

  const rows = [];
  rows.push({
    key: "status",
    icon: <StatusDotIcon />,
    label: "Status",
    right: (
      <span className={`chip chip--${card.status}`}>{STATUS_LABEL[card.status]}</span>
    ),
    static: true,
  });

  if (card.status === "active") {
    rows.push({ key: "limits", icon: <LimitsIcon />, label: "Limits" });
    rows.push({ key: "travel", icon: <TravelIcon />, label: "Travel indicator" });
    /* F-7 Card Management runs from this row. */
    rows.push({
      key: "pin",
      icon: <EditIcon />,
      label: "Change pin",
      onClick: () => setStep("pinMethod"),
    });
    rows.push({ key: "wallet", icon: <AppleIcon />, label: "Add to Apple Pay" });
    rows.push({
      key: "lost",
      icon: <CardOffIcon />,
      label: "Lost or damaged card",
      danger: true,
    });
  }

  if (card.status === "suspended") {
    rows.push({
      key: "unblock",
      icon: <UnlockIcon />,
      label: "Unblock Card",
      onClick: () => setStep("unlock"),
    });
    rows.push({ key: "replace", icon: <SwapIcon />, label: "Replace Card" });
  }

  return (
    <main className="screen">
      <TopBar title="Card Details" onBack={() => router.push("/home")} />

      {displayed.art ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          className="cardart cardart--image"
          src={displayed.art}
          alt={`${displayed.kind} ending ${displayed.last4}, ${displayed.holder}`}
        />
      ) : (
        <div className="cardart">
          <div className="cardart__top">
            <p className="cardart__kind">{displayed.kind}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cardart__logo" src="/logo-white.png" alt="First Native" />
          </div>
          <p className="cardart__num">{displayed.number}</p>
          <div className="cardart__meta">
            <span>CVV</span>
            <strong>{displayed.cvv}</strong>
            <span>Expiry date</span>
            <strong>{displayed.expiry}</strong>
          </div>
          <div className="cardart__foot">
            <p className="cardart__holder">{displayed.holder}</p>
            {/* Habemco's Mastercard asset, matching the mark baked into the
                exported card art so rendered and exported cards agree. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cardart__scheme" src="/Mastercard.png" alt="Mastercard" />
          </div>
        </div>
      )}

      {card.status === "shipped" ? (
        <button type="button" className="prompt" onClick={() => setStep("cvv")}>
          <p className="prompt__text">Got your card?</p>
          <span className="prompt__cta">Activate Now!</span>
        </button>
      ) : null}

      {card.status === "suspended" ? (
        <p className="support-note">
          Contact support if you suspect your card was lost or stolen.
        </p>
      ) : null}

      <div className="rows">
        {rows.map((r) => {
          const cls = [
            "row",
            r.static ? "row--static" : "",
            r.danger ? "row--danger" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return r.onClick ? (
            <button key={r.key} type="button" className={cls} onClick={r.onClick}>
              <span className="row__icon">{r.icon}</span>
              <p className="row__label">{r.label}</p>
              <span className="row__right">
                <ChevronRight />
              </span>
            </button>
          ) : (
            <div key={r.key} className={cls}>
              <span className="row__icon">{r.icon}</span>
              <p className="row__label">{r.label}</p>
              <span className="row__right">{r.right ?? <ChevronRight />}</span>
            </div>
          );
        })}
      </div>

      {/* ---------------- F-4: Activate Card (PL-6) ---------------- */}

      {step === "cvv" ? (
        <Sheet_Bottom
          title="Enter your card CVV"
          sub="Enter the 3-digit security code from the back of your physical card."
          onDismiss={closeFlow}
        >
          <OtpInput value={cvv} onChange={setCvv} length={3} />
          <p className="cvv-hint">
            A Card Verification Value (CVV) is a 3-digit security code on your
            physical card.
          </p>
          <div className="overlay__actions btn-stack">
            <Button
              disabled={cvv.replace(/\s/g, "").length !== 3}
              onClick={() => setStep("setPin")}
            >
              Continue
            </Button>
            <Button variant="outline" onClick={closeFlow}>
              Cancel
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {step === "setPin" ? (
        <Sheet_Bottom
          title="Set a PIN"
          sub="Choose a 4-digit PIN for your card."
          onDismiss={closeFlow}
        >
          <OtpInput value={pin} onChange={setPin} length={4} mask />
          <div className="overlay__actions btn-stack">
            <Button
              disabled={pin.replace(/\s/g, "").length !== 4}
              onClick={() => {
                setPinError("");
                setStep("confirmPin");
              }}
            >
              Continue
            </Button>
            <Button variant="outline" onClick={closeFlow}>
              Cancel
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {step === "confirmPin" ? (
        <Sheet_Bottom
          title="Confirm PIN"
          sub="Re-enter the PIN to confirm."
          onDismiss={closeFlow}
        >
          <OtpInput
            value={confirm}
            onChange={(v) => {
              if (pinError) setPinError("");
              setConfirm(v);
            }}
            length={4}
            mask
            error={!!pinError}
          />
          <div style={{ marginTop: 14 }}>
            <Message text={pinError} />
          </div>
          <div className="overlay__actions btn-stack">
            <Button
              disabled={confirm.replace(/\s/g, "").length !== 4}
              onClick={() => {
                if (confirm.replace(/\s/g, "") !== pin.replace(/\s/g, "")) {
                  setPinError("The PINs do not match. Please try again.");
                  return;
                }
                finishActivation();
              }}
            >
              Confirm
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setConfirm("");
                setPinError("");
                setStep("setPin");
              }}
            >
              Back
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {/* ---------------- F-5: Unblock Card (PL-7) ---------------- */}

      {step === "unlock" ? (
        <Sheet_Bottom
          title="Unlock Card"
          sub="You can use it normally afterwards."
          onDismiss={closeFlow}
        >
          <div className="btn-stack">
            <Button onClick={confirmUnlock}>Unlock Card</Button>
            <Button variant="outline" onClick={closeFlow}>
              Cancel
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {/* ---------------- F-7: Card Management — Manage pin ---------------- */}

      {step === "pinMethod" ? (
        <Sheet_Bottom title="Select how to update your PIN:" onDismiss={closeFlow}>
          <div className="method-list">
            <button
              type="button"
              className="method"
              onClick={() => {
                setPinChannel("email");
                setStep("pinCode");
              }}
            >
              <span className="method__icon">
                <MailIcon />
              </span>
              <span className="method__main">
                <span className="method__label">via Email</span>
                <span className="method__value">jane.doe@email.com</span>
              </span>
              <ChevronRight />
            </button>
            <button
              type="button"
              className="method"
              onClick={() => {
                setPinChannel("phone");
                setStep("pinCode");
              }}
            >
              <span className="method__icon">
                <PhoneIcon />
              </span>
              <span className="method__main">
                <span className="method__label">via Phone number</span>
                <span className="method__value">(•••) ••• 4417</span>
              </span>
              <ChevronRight />
            </button>
          </div>
          <div className="overlay__actions">
            <Button variant="outline" onClick={closeFlow}>
              Cancel
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {step === "pinCode" ? (
        <Sheet_Bottom
          title="Enter the code"
          sub={
            pinChannel === "phone"
              ? "A code has been sent to your phone. Enter it below."
              : "A code has been sent to your email. Enter it below."
          }
          onDismiss={closeFlow}
        >
          <OtpInput value={code} onChange={onCodeChange} error={!!codeError} />
          <div style={{ marginTop: 14 }}>
            <Message text={codeError} />
          </div>
          <div className="overlay__actions btn-stack">
            <Button
              disabled={code.replace(/\s/g, "").length !== 4}
              onClick={() => {
                if (code.replace(/\s/g, "") !== VALID_CODE) {
                  setCodeError("Invalid code. Please try again.");
                  return;
                }
                setStep("pinNew");
              }}
            >
              Continue
            </Button>
            <Button variant="outline" onClick={closeFlow}>
              Cancel
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {step === "pinNew" ? (
        <Sheet_Bottom
          title="New PIN"
          sub="Now enter your new PIN."
          onDismiss={closeFlow}
        >
          <OtpInput value={pin} onChange={setPin} length={4} mask />
          <div className="overlay__actions btn-stack">
            <Button
              disabled={pin.replace(/\s/g, "").length !== 4}
              onClick={() => {
                setPinError("");
                setStep("pinConfirm");
              }}
            >
              Continue
            </Button>
            <Button variant="outline" onClick={closeFlow}>
              Cancel
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {step === "pinConfirm" ? (
        <Sheet_Bottom
          title="Confirm the new PIN"
          sub="Re-enter the PIN to confirm."
          onDismiss={closeFlow}
        >
          <OtpInput
            value={confirm}
            onChange={(v) => {
              if (pinError) setPinError("");
              setConfirm(v);
            }}
            length={4}
            mask
            error={!!pinError}
          />
          <div style={{ marginTop: 14 }}>
            <Message text={pinError} />
          </div>
          <div className="overlay__actions btn-stack">
            <Button
              disabled={confirm.replace(/\s/g, "").length !== 4}
              onClick={() => {
                if (confirm.replace(/\s/g, "") !== pin.replace(/\s/g, "")) {
                  setPinError("The PINs do not match. Please try again.");
                  return;
                }
                setStep("pinDone");
              }}
            >
              Confirm
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setConfirm("");
                setPinError("");
                setStep("pinNew");
              }}
            >
              Back
            </Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {step === "pinDone" ? (
        <Sheet_Bottom onDismiss={closeFlow}>
          <div className="done" style={{ paddingTop: 8 }}>
            <div className="done__badge">
              <BigCheck />
            </div>
            <h2 className="done__title">All done!</h2>
            <p className="done__body">PIN successfully updated.</p>
          </div>
          <div className="overlay__actions">
            <Button onClick={closeFlow}>Back to Card Details</Button>
          </div>
        </Sheet_Bottom>
      ) : null}

      {toast ? (
        <Toast>
          <CheckOnFill size={18} />
          {toast}
        </Toast>
      ) : null}
    </main>
  );
}
