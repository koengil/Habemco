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
