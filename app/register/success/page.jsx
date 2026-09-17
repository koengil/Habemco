"use client";

import { useRouter } from "next/navigation";

import { BigCheck } from "../../../components/icons";
import { Button, Footer, Grow, Hero, Sheet } from "../../../components/ui";

/**
 * Registration Successful — RG-7 / RG-8.
 *
 * Built as its own page rather than an inline state (RG-8): Habemco accepted
 * either, and a separate page reads more clearly in the emulator. Keeps the
 * Register header, so all four Register screens share the textured header and
 * footer as the acceptance criteria require.
 */
export default function RegistrationSuccessfulPage() {
  const router = useRouter();

  return (
    <main className="screen">
      <Hero />

      <Sheet>
        <div className="done">
          <div className="done__badge">
            <BigCheck />
          </div>
          <h1 className="done__title">Registration Successful!</h1>
          <p className="done__body">
            Your account has been created successfully. You can now log in with your
            credentials.
          </p>
        </div>

        <div style={{ marginTop: 34 }}>
          <Button onClick={() => router.push("/login")}>Log in</Button>
        </div>

        <Grow />
        <Footer />
      </Sheet>
    </main>
  );
}
