"use client";

import { useRouter } from "next/navigation";

import { BigCheck } from "../../../components/icons";
import { Button, Grow, Sheet, TopBar } from "../../../components/ui";

/** All done — FP-6. The existing screen, reskinned to brand colours. */
export default function ForgotDonePage() {
  const router = useRouter();

  return (
    <main className="screen">
      <TopBar title="Forgot Password" />

      <Sheet flat>
        <div className="done">
          <div className="done__badge">
            <BigCheck />
          </div>
          <h1 className="done__title">All done!</h1>
          <p className="done__body">Your password has been successfully changed!</p>
        </div>

        <Grow />

        <div style={{ paddingBottom: 26 }}>
          <Button onClick={() => router.push("/login")}>Go to Login</Button>
        </div>
      </Sheet>
    </main>
  );
}
