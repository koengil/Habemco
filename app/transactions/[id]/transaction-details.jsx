"use client";

import { useRouter } from "next/navigation";

import { CardIcon } from "../../../components/icons";
import { Button, TabBar, TopBar } from "../../../components/ui";
import { getTransaction, money } from "../../../lib/transactions";

/**
 * Transaction Details — F-6, PL-3.
 *
 * The detail screen reskinned to brand colours. PL-3 allows the Export
 * Transaction button to remain non-functional, so it is present but inert.
 */
export default function TransactionDetails({ id }) {
  const router = useRouter();
  const t = getTransaction(id);

  if (!t) {
    return (
      <main className="screen">
        <TopBar title="Transaction Details" onBack={() => router.push("/transactions")} />
        <div className="stub">
          <p className="stub__title">Transaction not found</p>
          <Button variant="outline" onClick={() => router.push("/transactions")}>
            Back to Transaction History
          </Button>
        </div>
      </main>
    );
  }

  /* Same fields, in the same order, as the live Transaction Details screen. */
  const rows = [
    ["Amount", money(t.amount)],
    ["Description", t.description],
    ["Type", t.type],
    ["Status", t.status],
  ];

  return (
    <main className="screen">
      <TopBar title="Transaction Details" onBack={() => router.push("/transactions")} />

      <div className="detail-hero">
        <span className="detail-hero__icon">
          <CardIcon size={26} />
        </span>
        <p className="detail-hero__caption">
          {t.type}: {money(t.amount)}
        </p>
      </div>

      <dl className="dl">
        {rows.map(([k, v]) => (
          <div key={k} className="dl__row">
            <dt className="dl__key">{k}</dt>
            <dd className="dl__val">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="detail-actions">
        {/* PL-3: may remain non-functional in the prototype. */}
        <Button variant="outline">Export Transaction</Button>
      </div>

      <TabBar active="home" />
    </main>
  );
}
