"use client";

import { TabBar, TopBar } from "../../components/ui";

/**
 * FAQ — one of F-8's three tabs.
 *
 * PL-10 puts FAQ under "reskin only if time allows" and does not require it
 * for the Section 6 flows, so this is a reskinned shell: enough for the tab to
 * navigate somewhere real, with no invented product content.
 */

const TOPICS = [
  "Activating your card",
  "Setting and changing your PIN",
  "Adding your card to a mobile wallet",
  "Replacing a lost or stolen card",
  "Direct deposit",
  "Fees and limits",
];

export default function FaqPage() {
  return (
    <main className="screen">
      <TopBar title="FAQ" />

      <div className="rows">
        {TOPICS.map((topic) => (
          <div key={topic} className="row">
            <p className="row__label">{topic}</p>
          </div>
        ))}
      </div>

      <TabBar active="faq" />
    </main>
  );
}
