import CardDetails from "./card-details";

/* The three cards PL-1 puts on Home, so every Card Details route prerenders. */
export function generateStaticParams() {
  return [{ id: "physical-1" }, { id: "virtual-1" }, { id: "physical-2" }];
}

export default async function CardDetailsPage({ params }) {
  const { id } = await params;
  return <CardDetails id={id} />;
}
