"use client";

import { useRouter } from "next/navigation";

import { ChevronRight, SupportIcon } from "../../components/icons";
import { TabBar, TopBar } from "../../components/ui";
import { TRANSACTIONS, groupByDate, money } from "../../lib/transactions";

/**
 * Transaction History — F-6, PL-2.
 *
 * PL-2 changes from the current screen:
 *   - the three-dot menu icons are removed; the whole row is the tap target
 *     and navigates to Transaction Details
 *   - the Filter control is muted so it does not read as a primary action
 *   - Contact Support moves to the upper right corner of the header
 */
export default function TransactionHistoryPage() {
  const router = useRouter();
  const groups = groupByDate(TRANSACTIONS);

  return (
    <main className="screen">
      <TopBar
        title="Transaction History"
        onBack={() => router.push("/home")}
        right={
          <button type="button" className="bar__btn" aria-label="Contact Support">
            <SupportIcon />
          </button>
        }
      />

      <div className="txn-tools">
        <button type="button" className="txn-filter">
          Filter
        </button>
      </div>

      <div className="txn-list">
        {groups.map((g) => (
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
        ))}
      </div>

      <TabBar active="home" />
    </main>
  );
}
