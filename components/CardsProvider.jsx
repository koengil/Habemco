"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

/**
 * Card state for F-4 and F-5.
 *
 * PL-1 asks for one card in each status the card flows need, so Activate Card
 * and Unblock Card both start from the same Home: Shipped (Physical), Active
 * (Virtual) and Suspended (Physical).
 *
 * OQ-5: the physical and virtual cards are treated as separate cards. The
 * Shipped physical card's details screen shows the *virtual* card's art with
 * its number visible (PL-5), while the "Got your card? Activate Now!" prompt
 * stays tied to the physical card — which is why `showsVirtual` points at the
 * virtual card rather than duplicating its numbers here.
 *
 * All values are static placeholders (FB-6) and the cardholder name is the
 * neutral one OQ-2 requires.
 */

const INITIAL = [
  {
    id: "physical-1",
    kind: "Physical Card",
    status: "shipped",
    number: "8765 8888 9999 8765",
    last4: "8765",
    cvv: "111",
    expiry: "11/28",
    holder: "Jane Doe",
    showsVirtual: "virtual-1",
    /* Habemco's exported card art. Its baked-in values match this card exactly
       (Physical Card, 8765 8888 9999 8765, CVV 111, 11/28, Jane Doe), so it is
       used as-is. Cards without an `art` entry fall back to the rendered card,
       which keeps their own numbers truthful. */
    art: "/habemco-card-jane.png",
  },
  {
    id: "virtual-1",
    kind: "Virtual Card",
    status: "active",
    number: "4419 7320 1188 4402",
    last4: "4402",
    cvv: "884",
    expiry: "03/29",
    holder: "Jane Doe",
  },
  {
    id: "physical-2",
    kind: "Physical Card",
    status: "suspended",
    number: "5312 0044 7781 9930",
    last4: "9930",
    cvv: "402",
    expiry: "07/27",
    holder: "Jane Doe",
  },
];

export const STATUS_LABEL = {
  shipped: "Shipped",
  active: "Active",
  suspended: "Suspended",
};

const CardsCtx = createContext(null);

export function CardsProvider({ children }) {
  const [cards, setCards] = useState(INITIAL);

  const setStatus = useCallback((id, status) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
  }, []);

  const value = useMemo(
    () => ({
      cards,
      getCard: (id) => cards.find((c) => c.id === id) || null,
      setStatus,
      /* Lets a reviewer run the flows again without reloading. */
      reset: () => setCards(INITIAL),
    }),
    [cards, setStatus]
  );

  return <CardsCtx.Provider value={value}>{children}</CardsCtx.Provider>;
}

export function useCards() {
  const ctx = useContext(CardsCtx);
  if (!ctx) throw new Error("useCards must be used inside <CardsProvider>");
  return ctx;
}
