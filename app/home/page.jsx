"use client";

import { useRouter } from "next/navigation";

import { STATUS_LABEL, useCards } from "../../components/CardsProvider";
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
 * Home — PL-1. Where F-2 lands, and where F-4 and F-5 start.
 *
 * Copy comes from the live locale files (common.json / debitCard.json).
 * PL-1 requires one card in each status the card flows need, so the list shows
 * Shipped (Physical), Active (Virtual) and Suspended (Physical) and both card
 * flows begin from this one screen. The cardholder name is the neutral
 * placeholder OQ-2 asks for.
 *
 * The card rows are real tap targets into Card Details. The quick actions are
 * not: Transactions, Transfers, Recipients and More are outside this
 * prototype's scope, so they are not drawn as something that leads anywhere.
 */

const QUICK = [
  { label: "Transactions", Icon: TransactionsIcon },
  { label: "Transfers", Icon: TransfersIcon },
  { label: "Recipients", Icon: RecipientsIcon },
  { label: "More", Icon: MoreIcon },
];

export default function HomePage() {
  const router = useRouter();
  const { cards } = useCards();

  return (
    <main className="screen">
      <div className="home">
        <header className="home__hero">
          <StatusBar />

          {/* Prototype control, not product UI. */}
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
          {cards.map((c) => (
            <button
              key={c.id}
              type="button"
              className="card-row card-row--tap"
              onClick={() => router.push(`/cards/${c.id}`)}
            >
              <span className="card-row__icon">
                <CardIcon />
              </span>
              <span className="card-row__main">
                <span className="card-row__name">{c.kind}</span>
                <span className="card-row__num">•••• {c.last4}</span>
              </span>
              <span className="card-row__tags">
                <span className={`chip chip--${c.status}`}>
                  {STATUS_LABEL[c.status]}
                </span>
                <span className="card-row__chev">
                  <ChevronRight />
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="scope-note">
          Transaction History, Transfers and Recipients are outside this
          prototype&apos;s scope. Tap a card to open Card Details — the Shipped
          card runs Activate Card, the Suspended card runs Unblock Card.
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
