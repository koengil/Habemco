"use client";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  CardIcon,
  ChevronRight,
  HelpIcon,
  HomeIcon,
  MoreIcon,
  RecipientsIcon,
  TransactionsIcon,
  TransfersIcon,
  UserIcon,
} from "../../components/icons";
import { StatusBar } from "../../components/ui";

/**
 * Home — PL-1. Where F-2 lands after a successful login.
 *
 * Copy comes from the live app's locale files (common.json / debitCard.json):
 * "Good Morning", "Current Balance", "Available Balance", "Important Messages",
 * "Transactions", "Recipients", "More", "Cards", "Direct Deposit Info",
 * "Instant Issue", "Active" / "Shipped" / "Suspended".
 *
 * PL-1 asks for one card in each status the card flows need, so the list shows
 * Shipped (Physical), Active (Virtual) and Suspended (Physical). The cardholder
 * name is the neutral placeholder required by OQ-2.
 *
 * Rows and quick actions are display-only here: Card Details, Activate Card,
 * Unblock Card and Transaction History are outside this prototype's scope, so
 * nothing is drawn as a tap target that would lead nowhere.
 */

const QUICK = [
  { label: "Transactions", Icon: TransactionsIcon },
  { label: "Transfers", Icon: TransfersIcon },
  { label: "Recipients", Icon: RecipientsIcon },
  { label: "More", Icon: MoreIcon },
];

const CARDS = [
  { kind: "Physical Card", last4: "8765", status: "shipped", label: "Shipped" },
  {
    kind: "Virtual Card",
    last4: "4402",
    status: "active",
    label: "Active",
    tag: "Instant Issue",
  },
  { kind: "Physical Card", last4: "9930", status: "suspended", label: "Suspended" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="screen">
      <div className="home">
        <header className="home__hero">
          <StatusBar />

          {/* Prototype control, not part of the product UI. */}
          <button
            type="button"
            className="home__exit"
            onClick={() => router.push("/login")}
          >
            <ArrowLeft />
            Back to Login
          </button>

          <p className="home__greet">Good Morning!</p>
          <p className="home__name">Jane Doe</p>

          <div className="home__balances">
            <div>
              <p className="home__label">Current Balance</p>
              <p className="home__value">$5,000.00</p>
            </div>
            <div>
              <p className="home__label">Available Balance</p>
              <p className="home__value">$3,750.00</p>
            </div>
          </div>

          <div className="msgbar">
            <span className="msgbar__dot" />
            <span>Important Messages</span>
            <span className="msgbar__chev">
              <ChevronRight />
            </span>
          </div>
        </header>

        <div className="quick">
          {QUICK.map(({ label, Icon }) => (
            <div key={label} className="quick__item">
              <span className="quick__icon">
                <Icon />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="section-head">
          <h2 className="section-head__title">Cards</h2>
          <span className="section-head__link">Direct Deposit Info</span>
        </div>

        <div className="cards">
          {CARDS.map((c) => (
            <div key={c.last4} className="card-row">
              <span className="card-row__icon">
                <CardIcon />
              </span>
              <div className="card-row__main">
                <p className="card-row__name">{c.kind}</p>
                <p className="card-row__num">•••• {c.last4}</p>
              </div>
              <span className="card-row__tags">
                {c.tag ? <span className="chip chip--muted">{c.tag}</span> : null}
                <span className={`chip chip--${c.status}`}>{c.label}</span>
              </span>
            </div>
          ))}
        </div>

        <p className="scope-note">
          Card Details, Activate Card, Unblock Card and Transaction History are
          outside this prototype&apos;s scope, so the rows above are display-only.
        </p>

        <nav className="tabbar">
          <span className="tabbar__item tabbar__item--on">
            <HomeIcon />
            <span>Home</span>
          </span>
          <span className="tabbar__item">
            <HelpIcon />
            <span>FAQ</span>
          </span>
          <span className="tabbar__item">
            <UserIcon />
            <span>Profile</span>
          </span>
        </nav>
      </div>
    </main>
  );
}
