"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import {
  ChevronRight,
  DepositIcon,
  FilterIcon,
  SearchIcon,
  SupportIcon,
} from "../../components/icons";
import { StatusBar, TabBar } from "../../components/ui";
import { TRANSACTIONS, groupByDate, money } from "../../lib/transactions";

/**
 * Transaction History — F-6, PL-2.
 *
 * Structure follows the live screen (transaction-list-header.tsx +
 * SearchAndFilter): a navy balances block with Direct Deposit Info, then a
 * title row carrying the filter control, then the search field, then the list
 * grouped by date.
 *
 * PL-2 changes:
 *   - the three-dot menu icons are gone; the whole row is the tap target and
 *     navigates to Transaction Details
 *   - the filter keeps the live ButtonFilter anatomy (label + filter icon,
 *     underlined) but takes the muted text colour instead of the link teal, so
 *     it does not read as a primary action
 *   - Contact Support moves to the upper right corner of the header
 */
export default function TransactionHistoryPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? TRANSACTIONS.filter((t) => t.name.toLowerCase().includes(q))
      : TRANSACTIONS;
    return groupByDate(list);
  }, [query]);

  return (
    <main className="screen">
      <header className="txn-head">
        <StatusBar />
        <div className="txn-head__top">
          <div className="txn-head__balances">
            <div>
              <p className="txn-head__label">Available Balance</p>
              <p className="txn-head__value">$3,750.00</p>
            </div>
            <div>
              <p className="txn-head__label">Current Balance</p>
              <p className="txn-head__value">$5,000.00</p>
            </div>
          </div>
          {/* PL-2: Contact Support in the upper right corner. */}
          <button type="button" className="bar__btn" aria-label="Contact Support">
            <SupportIcon />
          </button>
        </div>
        <button type="button" className="txn-head__dd">
          <DepositIcon />
          Direct Deposit Info
        </button>
      </header>

      <div className="txn-tools">
        <div className="txn-tools__row">
          <h1 className="txn-tools__title">Transaction History</h1>
          <button type="button" className="txn-filter">
            Filter
            <FilterIcon />
          </button>
        </div>

        <div className="txn-search">
          <SearchIcon />
          <input
            id="txn-search"
            type="search"
            placeholder="Search by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search transactions by name"
          />
        </div>
      </div>

      <div className="txn-list">
        {groups.length === 0 ? (
          <p className="txn-empty">No transactions match that search.</p>
        ) : (
          groups.map((g) => (
            <section key={g.date}>
              <h2 className="txn-group">{g.date}</h2>
              {g.items.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="txn"
                  onClick={() => router.push(`/transactions/${t.id}`)}
                >
                  <span className="txn__main">
                    <span className="txn__name">{t.name}</span>
                    <span className="txn__meta">
                      {t.time}
                      {t.status === "Pending" ? (
                        <span className="txn__pending">Pending</span>
                      ) : null}
                    </span>
                  </span>
                  <span
                    className={t.amount > 0 ? "txn__amt txn__amt--in" : "txn__amt"}
                  >
                    {money(t.amount)}
                  </span>
                  <span className="txn__chev">
                    <ChevronRight />
                  </span>
                </button>
              ))}
            </section>
          ))
        )}
      </div>

      <TabBar active="home" />
    </main>
  );
}
