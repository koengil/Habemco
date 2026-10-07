"use client";

import { useRouter } from "next/navigation";

import { STATUS_LABEL, useCards } from "../../components/CardsProvider";
import {
  ArrowLeft,
  CardIcon,
  ChevronRight,
  MoreIcon,
  PaymentIcon,
  TransactionsIcon,
} from "../../components/icons";
import { StatusBar, TabBar } from "../../components/ui";

/**
 * Home — PL-1. Where F-2 lands, and where F-4 and F-5 start.
 *
 * Copy comes from the live locale files (common.json / debitCard.json).
 * PL-1 requires one card in each status the card flows need, so the list shows
 * Shipped (Physical), Active (Virtual) and Suspended (Physical) and both card
 * flows begin from this one screen. The cardholder name is the neutral
 * placeholder OQ-2 asks for.
 *
 * The card rows are real tap targets into Card Details. Of the quick actions
 * only Transactions leads anywhere: Payment and More are outside this
 * prototype's scope, so they are not drawn as something that leads anywhere.
 */

/* Transactions opens F-6; the rest are outside this prototype's scope. */
const QUICK = [
  { label: "Transactions", Icon: TransactionsIcon, href: "/transactions" },
  { label: "Payment", Icon: PaymentIcon },
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
          {QUICK.map(({ label, Icon, href }) =>
            href ? (
              <button
                key={label}
                type="button"
                className="quick__item"
                onClick={() => router.push(href)}
              >
                <span className="quick__icon">
                  <Icon />
                </span>
                <span>{label}</span>
              </button>
            ) : (
              <div key={label} className="quick__item">
                <span className="quick__icon">
                  <Icon />
                </span>
                <span>{label}</span>
              </div>
            )
          )}
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

        <TabBar active="home" />
      </div>
    </main>
  );
}
