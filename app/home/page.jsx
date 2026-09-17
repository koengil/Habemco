"use client";

import { useRouter } from "next/navigation";

import { Button, StatusBar } from "../../components/ui";

/**
 * Home — where F-2 ends.
 *
 * Deliberately a stub. The post-login screens (Home, Card Details, Activate
 * Card, Unblock Card, Transaction History) are outside this prototype's scope,
 * which is the login and enrollment flows in Sections 5.1–5.3. Enough of the
 * header is rendered to show the login landed, and nothing more is invented.
 */
export default function HomePage() {
  const router = useRouter();

  return (
    <main className="screen">
      <div className="home">
        <div className="home__hero">
          <StatusBar />
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
        </div>

        <div className="stub">
          <p className="stub__title">Post-login screens are out of scope</p>
          <p className="stub__body">
            This prototype covers the login and enrollment flows — Register,
            Login and Forgot Password. Home, Card Details, Activate Card, Unblock
            Card and Transaction History are not part of this build.
          </p>
          <Button variant="outline" onClick={() => router.push("/login")}>
            Back to Login
          </Button>
        </div>
      </div>
    </main>
  );
}
