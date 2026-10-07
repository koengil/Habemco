/**
 * Sample transactions for F-6. Static placeholders (FB-6); nothing here talks
 * to a backend. Grouped by date the way the live Transaction History does.
 *
 * `account` places each one under the Credit Account or Deposit Account tab.
 */

export const TRANSACTIONS = [
  {
    id: "t1",
    account: "credit",
    name: "Blue Ridge Market",
    description: "BLUE RIDGE MKT*4471; ASHEVILLE; USA",
    date: "Sep 16, 2026",
    time: "2:41 PM",
    amount: -42.18,
    type: "Purchase",
    category: "Groceries",
    method: "Virtual Card ···· 4402",
    status: "Posted",
    reference: "TXN-4471-99A",
  },
  {
    id: "t2",
    account: "deposit",
    name: "Payroll deposit",
    description: "PAYROLL DEP*ACME CO; RALEIGH; USA",
    date: "Sep 15, 2026",
    time: "6:02 AM",
    amount: 1250.0,
    type: "Deposit",
    category: "Direct deposit",
    method: "Direct deposit",
    status: "Posted",
    reference: "TXN-4468-21B",
  },
  {
    id: "t3",
    account: "credit",
    name: "Cedar Street Fuel",
    description: "CEDAR ST FUEL #0712; CHARLOTTE; USA",
    date: "Sep 15, 2026",
    time: "8:17 AM",
    amount: -56.4,
    type: "Purchase",
    category: "Fuel",
    method: "Virtual Card ···· 4402",
    status: "Pending",
    reference: "TXN-4460-07C",
  },
  {
    id: "t4",
    account: "credit",
    name: "Northline Pharmacy",
    description: "NORTHLINE PHARM*4452; DURHAM; USA",
    date: "Sep 11, 2026",
    time: "5:55 PM",
    amount: -23.75,
    type: "Purchase",
    category: "Health",
    method: "Virtual Card ···· 4402",
    status: "Posted",
    reference: "TXN-4452-63D",
  },
  {
    id: "t5",
    account: "deposit",
    name: "Riverside Utilities",
    description: "RIVERSIDE UTIL*BILLPAY; GREENSBORO; USA",
    date: "Sep 9, 2026",
    time: "11:30 AM",
    amount: -118.02,
    type: "Bill payment",
    category: "Bills",
    method: "Virtual Card ···· 4402",
    status: "Posted",
    reference: "TXN-4441-15E",
  },
];

export function getTransaction(id) {
  return TRANSACTIONS.find((t) => t.id === id) || null;
}

/** Preserves list order, so the groups come out newest-first. */
export function groupByDate(list) {
  const groups = [];
  for (const t of list) {
    const last = groups[groups.length - 1];
    if (last && last.date === t.date) last.items.push(t);
    else groups.push({ date: t.date, items: [t] });
  }
  return groups;
}

export function money(n) {
  const sign = n < 0 ? "−" : "+";
  return `${sign}$${Math.abs(n).toFixed(2)}`;
}
