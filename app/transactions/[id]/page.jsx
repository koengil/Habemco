import { TRANSACTIONS } from "../../../lib/transactions";
import TransactionDetails from "./transaction-details";

export function generateStaticParams() {
  return TRANSACTIONS.map((t) => ({ id: t.id }));
}

export default async function TransactionDetailsPage({ params }) {
  const { id } = await params;
  return <TransactionDetails id={id} />;
}
