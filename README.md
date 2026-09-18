# First Native — login & enrollment prototype

Clickable prototype of the ENACOMM white-label prepaid card app, rebranded for
**First Native** (Habemco). Built for the funding-bank walkthrough.

Scope is the login and enrollment flows defined in
`Habemco_First_Native_Figma_Prototype_Requirements_v1.3.2` — Sections 5.1–5.3
and flows F-1, F-2 and F-3. Post-login screens are out of scope.

## Flows

| Flow | Path |
|---|---|
| **F-1 Register** | `/login` → `/register` → `/register/verify` → `/register/password` → `/register/success` → `/login` |
| **F-2 Login** | `/login` → `/home` (credentials, or Face ID / Biometric) |
| **F-3 Forgot Password** | `/login` → `/forgot` → `/forgot/code` → `/forgot/password` → `/forgot/done` → `/login` |
| **F-4 Activate Card** | `/home` → Shipped card → Activate Now → CVV → Set a PIN → Confirm PIN → "Card activated!" |
| **F-5 Unblock Card** | `/home` → Suspended card → Unblock Card → Unlock Card sheet → Active |
| **F-6 Transaction History** | `/home` → Transactions → `/transactions` → row → `/transactions/[id]` |
| **F-7 Card Management** | `/home` → Active card → Manage pin → method → code → new PIN → confirm → All done |
| **F-8 Bottom navigation** | Home / FAQ / Profile from any post-login screen; Profile → Edit Password → All done → Go to Home |

The emailed passcode is **7336**. Any syntactically valid email works. Nothing
talks to a backend; every value is a placeholder.

`/login?platform=android` renders the Android variant of LG-5 — a fingerprint
icon labelled "Biometric" instead of Face ID. It is a URL variant rather than an
on-screen switch so the shipped screen carries no extra control.

`/home` is where F-2 lands and follows **PL-1**: greeting, Current and Available
Balance, Important Messages, the four quick actions, and one card in each status
the card flows need (Shipped, Active, Suspended). Its rows are **display-only** —
Card Details, Activate Card, Unblock Card and Transaction History are outside
this prototype's scope, so nothing is drawn as a tap target that leads nowhere.
A "Back to Login" control in the header returns to the start of the flows; it is
a prototype affordance, not product UI.

## What is real, not mocked

Fields accept typing and buttons enable only on valid input, so the flows behave
the way the built app will rather than stepping between static frames:

- **Password rules** (`lib/password.js`) mirror
  `packages/app/helpers/password-validation.ts` in the live app regex for regex.
  The five booleans are RG-5's five requirement lines.
- **Login gating** follows the live form's `isDirty && isValid && !error`, and
  typing clears the error message.
- **Code entry** auto-advances, steps back on Backspace, accepts a pasted code,
  and shows the red error state on a wrong code.
- **Resend** counts down from 05:00 and only then enables "Request a new code".

## Design tokens

Values in `app/globals.css` are lifted from the live app's tenant registry
(`packages/app/design/tenants/tenant-themes.ts`, `habemco`) so this prototype
and the real app resolve to the same colours.

| Token | Value | Use |
|---|---|---|
| `--primary` | `#0A203A` | Navy — header, enabled primary button fill |
| `--secondary` | `#00AAAD` | Brand teal — focus rings, filled code boxes |
| `--link` | `#008285` | Teal for text on white (4.63:1, AA) |
| `--link-on-dark` | `#00AAAD` | Brand teal on navy (5.81:1, AA) |
| `--disabled` | `#808791` | Disabled button fill, white label |

The teal is split by surface deliberately: `#00AAAD` clears AA on the navy but
reaches only 2.83:1 on white, and darkening it enough for white fails on the
navy. One value cannot serve both.

Buttons follow `packages/app/components/ui/button.tsx`: `default` is
`bg-primary` with a white label, `outline` is `border-link` with a teal label.
BR-4 overrides the system's radius with a full pill.

Type is **Poppins** (BR-8), matching the live app's text styles.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

On a phone the app runs full-bleed; on a desktop it renders inside a
393 × 852 device frame so the link is presentable in a review.

## Not in this repo

The source material this was built from is ENACOMM Confidential and is
gitignored — the requirements `.docx`, `FirstNative_Brand_Guidelines.pdf` and the
original brand asset files. The logo and header texture the app actually serves
live in `public/`.
