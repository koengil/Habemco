import { Poppins } from "next/font/google";
import { CardsProvider } from "../components/CardsProvider";
import "./globals.css";

/* BR-8 / the live app's text styles: Poppins. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "First Native Prototype",
  description:
    "Clickable login and enrollment prototype for the First Native prepaid card app.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const FLOWS = [
  ["F-1", "Register — email, email OTP, create password, success"],
  ["F-2", "Login — credentials or Face ID / Biometric"],
  ["F-3", "Forgot Password — email, code, new password, all done"],
  ["F-4", "Activate Card — CVV, set PIN, confirm PIN, activated"],
  ["F-5", "Unblock Card — unlock confirmation, card active"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <div className="stage">
          <aside className="stage__aside">
            <p className="stage__eyebrow">Habemco · ENACOMM</p>
            <h1 className="stage__title">First Native prepaid card</h1>
            <p className="stage__lede">
              Login and enrollment prototype. Fields accept typing and the buttons
              enable only on valid input, so the flows behave the way the built app
              will. No live data and no backend — every value is a placeholder.
            </p>
            <ul className="stage__flows">
              {FLOWS.map(([id, label]) => (
                <li key={id}>
                  <span className="stage__id">{id}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <p className="stage__note">
              Enrollment is the shortened sequence: Habemco onboards the card and
              passes the PRN and email to ENACOMM, so the customer never enters a
              card number, CVV, SSN or date of birth. Use any email; the emailed
              code is <strong style={{ color: "#93a5b8" }}>7336</strong>. The card
              flows start from Home — tap the Shipped card for F-4, the Suspended
              card for F-5.
            </p>
          </aside>
          <div className="device">
            <CardsProvider>{children}</CardsProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
