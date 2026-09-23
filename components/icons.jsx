const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ChevronLeft({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true">
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function Eye({ size = 22, off = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3.2" />
      {off ? <path d="m4 20 16-16" /> : null}
    </svg>
  );
}

export function TickOn({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        d="M4.9 8.2 6.9 10.2 11.1 6"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TickOff({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...stroke} strokeWidth="1.3" aria-hidden="true">
      <circle cx="8" cy="8" r="7" />
      <path d="M4.9 8.2 6.9 10.2 11.1 6" strokeWidth="1.6" />
    </svg>
  );
}

export function BigCheck({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" {...stroke} strokeWidth="5" aria-hidden="true">
      <path d="M13 27.5 22 36.5 39 17" />
    </svg>
  );
}

export function FaceIdIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" {...stroke} strokeWidth="1.6" aria-hidden="true">
      <path d="M2 6.5V4a2 2 0 0 1 2-2h2.5" />
      <path d="M13.5 2H16a2 2 0 0 1 2 2v2.5" />
      <path d="M18 13.5V16a2 2 0 0 1-2 2h-2.5" />
      <path d="M6.5 18H4a2 2 0 0 1-2-2v-2.5" />
      <path d="M7 7.5V9M13 7.5V9M10 7.5V11" />
      <path d="M7 13c1.7 1.3 4.3 1.3 6 0" />
    </svg>
  );
}

export function FingerprintIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" {...stroke} strokeWidth="1.5" aria-hidden="true">
      <path d="M10 2.6c-2.1 0-4 .9-5.3 2.4" />
      <path d="M2.4 8.2A8 8 0 0 1 10 2.6a8 8 0 0 1 7.6 5.6" />
      <path d="M5.6 17A10 10 0 0 0 5 13a5 5 0 0 1 10 0c0 1.5-.2 2.9-.7 4.2" />
      <path d="M7.7 13a2.3 2.3 0 0 1 4.6 0c0 1.6-.3 3.1-.9 4.5" />
      <path d="M3.3 11.5A6.8 6.8 0 0 1 10 5.9c2.3 0 4.3 1.1 5.6 2.9" />
    </svg>
  );
}

export function HelpIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.6 9.3a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.8-.9 1.4v.4" />
      <path d="M12 16.8h.01" strokeWidth="2.2" />
    </svg>
  );
}

export function AlertIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...stroke} strokeWidth="1.5" aria-hidden="true">
      <circle cx="8" cy="8" r="6.6" />
      <path d="M8 4.8v4M8 11.1h.01" strokeWidth="1.9" />
    </svg>
  );
}

export function ArrowLeft({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true">
      <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
    </svg>
  );
}

export function ChevronRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function TransactionsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M8 6h12M8 6 11 3M8 6l3 3" />
      <path d="M16 18H4m12 0-3-3m3 3-3 3" />
    </svg>
  );
}

export function TransfersIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M8 7.5 12 3.5l4 4M16 16.5 12 20.5l-4-4" />
    </svg>
  );
}

export function RecipientsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3.2 3.2 0 0 1 0 5.9M17.5 19a5.6 5.6 0 0 0-1.6-3.9" />
    </svg>
  );
}

export function MoreIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
    </svg>
  );
}

export function HomeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19Z" />
    </svg>
  );
}

export function UserIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function CardIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19" />
    </svg>
  );
}

export function StatusDotIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
      <path d="M12 7.5v5" />
      <path d="M12 16.2h.01" strokeWidth="2.2" />
    </svg>
  );
}

export function PinIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="4" y="10" width="16" height="10" rx="2.4" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    </svg>
  );
}

export function WalletIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2.6" />
      <path d="M16 12.5h2.5" />
      <path d="M3 10h18" />
    </svg>
  );
}

export function FreezeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
    </svg>
  );
}

export function SwapIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M4 9h12l-3-3M20 15H8l3 3" />
    </svg>
  );
}

export function UnlockIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="4" y="10.5" width="16" height="9.5" rx="2.4" />
      <path d="M8 10.5V7.5a4 4 0 0 1 7.6-1.7" />
    </svg>
  );
}

/**
 * Check for use on a coloured surface: a solid white disc with the tick cut in
 * the surface colour. TickOn draws a white tick on a currentColor disc, which
 * disappears on the green toast where currentColor is already white.
 */
export function CheckOnFill({ size = 18, fill = "#009A12" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#fff" />
      <path
        d="M4.9 8.2 6.9 10.2 11.1 6"
        fill="none"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function FilterIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M3.5 6h17M6.5 12h11M10 18h4" />
    </svg>
  );
}

export function DepositIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 4v11m0 0 4-4m-4 4-4-4" />
      <path d="M4 18.5h16" />
    </svg>
  );
}

/**
 * Limits — the app's `avgPace` icon, path copied verbatim from
 * packages/app/components/icons-svg/icons/avg-pace.tsx (viewBox 0 0 24 25).
 * Filled, not stroked, so it takes `fill` rather than the shared stroke props.
 */
export function LimitsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 25" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M15.25 5.5C14.9 5.5 14.6042 5.37917 14.3625 5.1375C14.1208 4.89583 14 4.6 14 4.25C14 3.9 14.1208 3.60417 14.3625 3.3625C14.6042 3.12083 14.9 3 15.25 3C15.6 3 15.8958 3.12083 16.1375 3.3625C16.3792 3.60417 16.5 3.9 16.5 4.25C16.5 4.6 16.3792 4.89583 16.1375 5.1375C15.8958 5.37917 15.6 5.5 15.25 5.5ZM15.25 22C14.9 22 14.6042 21.8792 14.3625 21.6375C14.1208 21.3958 14 21.1 14 20.75C14 20.4 14.1208 20.1042 14.3625 19.8625C14.6042 19.6208 14.9 19.5 15.25 19.5C15.6 19.5 15.8958 19.6208 16.1375 19.8625C16.3792 20.1042 16.5 20.4 16.5 20.75C16.5 21.1 16.3792 21.3958 16.1375 21.6375C15.8958 21.8792 15.6 22 15.25 22ZM19.25 9C18.9 9 18.6042 8.87917 18.3625 8.6375C18.1208 8.39583 18 8.1 18 7.75C18 7.4 18.1208 7.10417 18.3625 6.8625C18.6042 6.62083 18.9 6.5 19.25 6.5C19.6 6.5 19.8958 6.62083 20.1375 6.8625C20.3792 7.10417 20.5 7.4 20.5 7.75C20.5 8.1 20.3792 8.39583 20.1375 8.6375C19.8958 8.87917 19.6 9 19.25 9ZM19.25 18.5C18.9 18.5 18.6042 18.3792 18.3625 18.1375C18.1208 17.8958 18 17.6 18 17.25C18 16.9 18.1208 16.6042 18.3625 16.3625C18.6042 16.1208 18.9 16 19.25 16C19.6 16 19.8958 16.1208 20.1375 16.3625C20.3792 16.6042 20.5 16.9 20.5 17.25C20.5 17.6 20.3792 17.8958 20.1375 18.1375C19.8958 18.3792 19.6 18.5 19.25 18.5ZM20.75 13.75C20.4 13.75 20.1042 13.6292 19.8625 13.3875C19.6208 13.1458 19.5 12.85 19.5 12.5C19.5 12.15 19.6208 11.8542 19.8625 11.6125C20.1042 11.3708 20.4 11.25 20.75 11.25C21.1 11.25 21.3958 11.3708 21.6375 11.6125C21.8792 11.8542 22 12.15 22 12.5C22 12.85 21.8792 13.1458 21.6375 13.3875C21.3958 13.6292 21.1 13.75 20.75 13.75ZM12 22.5C10.6167 22.5 9.31667 22.2375 8.1 21.7125C6.88333 21.1875 5.825 20.475 4.925 19.575C4.025 18.675 3.3125 17.6167 2.7875 16.4C2.2625 15.1833 2 13.8833 2 12.5C2 11.1167 2.2625 9.81667 2.7875 8.6C3.3125 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.8125 8.1 3.2875C9.31667 2.7625 10.6167 2.5 12 2.5V4.5C9.76667 4.5 7.875 5.275 6.325 6.825C4.775 8.375 4 10.2667 4 12.5C4 14.7333 4.775 16.625 6.325 18.175C7.875 19.725 9.76667 20.5 12 20.5V22.5ZM12 14.5C11.45 14.5 10.9792 14.3042 10.5875 13.9125C10.1958 13.5208 10 13.05 10 12.5C10 12.4167 10.0042 12.3292 10.0125 12.2375C10.0208 12.1458 10.0417 12.0583 10.075 11.975L8 9.9L9.4 8.5L11.475 10.575C11.5417 10.5583 11.7167 10.5333 12 10.5C12.55 10.5 13.0208 10.6958 13.4125 11.0875C13.8042 11.4792 14 11.95 14 12.5C14 13.05 13.8042 13.5208 13.4125 13.9125C13.0208 14.3042 12.55 14.5 12 14.5Z"
      />
    </svg>
  );
}

export function TravelIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="2.8" y="7.5" width="18.4" height="12.5" rx="2.2" />
      <path d="M8.8 7.5V5.6A1.6 1.6 0 0 1 10.4 4h3.2a1.6 1.6 0 0 1 1.6 1.6v1.9" />
      <path d="M2.8 13h18.4" />
    </svg>
  );
}

export function EditIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M15.5 5.2 18.8 8.5" />
      <path d="M4.5 19.5h3.3L19 8.3a1.8 1.8 0 0 0 0-2.6l-.7-.7a1.8 1.8 0 0 0-2.6 0L4.5 16.2Z" />
    </svg>
  );
}

export function AppleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.3 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.8-.8-2.9-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7c1.2 0 1.9-1.1 2.7-2.2.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.3-3.6Z" />
      <path d="M14.1 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.4-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.3Z" />
    </svg>
  );
}

export function CardOffIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="m4 20 16-16" />
    </svg>
  );
}

export function SupportIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
      <path d="M20 19v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
    </svg>
  );
}

export function MailIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </svg>
  );
}

export function PhoneIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.6" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

export function BellIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M6 10a6 6 0 0 1 12 0c0 3.5 1 5 1.6 5.8H4.4C5 15 6 13.5 6 10Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function StatusIcons() {
  return (
    <svg width="72" height="14" viewBox="0 0 72 14" fill="none" aria-hidden="true">
      <rect x="0" y="8" width="3" height="5" rx="1" fill="currentColor" />
      <rect x="5" y="6" width="3" height="7" rx="1" fill="currentColor" />
      <rect x="10" y="3" width="3" height="10" rx="1" fill="currentColor" />
      <rect x="15" y="0" width="3" height="13" rx="1" fill="currentColor" />
      <path d="M24 4.5a12 12 0 0 1 17 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M27.5 8a7 7 0 0 1 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32.5" cy="11.5" r="1.6" fill="currentColor" />
      <rect x="48" y="1" width="20" height="11" rx="3" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <rect x="49.5" y="2.5" width="15" height="8" rx="1.8" fill="currentColor" />
      <path d="M69.5 5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
