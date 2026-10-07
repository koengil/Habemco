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

export function PaymentIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2c-.4-.9-1.5-1.5-2.8-1.5-1.6 0-2.8.9-2.8 2.1 0 2.9 5.6 1.5 5.6 4.3 0 1.2-1.2 2.1-2.8 2.1-1.3 0-2.4-.6-2.8-1.5M12 6v1.7M12 16.3V18" />
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M11.0451 12.9546H12.9542V8.18183H11.0451V12.9546ZM11.9996 15.8182C12.2701 15.8182 12.4968 15.7267 12.6798 15.5438C12.8627 15.3608 12.9542 15.1341 12.9542 14.8637C12.9542 14.5932 12.8627 14.3665 12.6798 14.1835C12.4968 14.0006 12.2701 13.9091 11.9996 13.9091C11.7292 13.9091 11.5025 14.0006 11.3195 14.1835C11.1366 14.3665 11.0451 14.5932 11.0451 14.8637C11.0451 15.1341 11.1366 15.3608 11.3195 15.5438C11.5025 15.7267 11.7292 15.8182 11.9996 15.8182ZM4.36328 18.6818V16.7727H6.27237V10.0909C6.27237 8.77047 6.6701 7.59717 7.46555 6.57104C8.26101 5.5449 9.2951 4.87274 10.5678 4.55456V3.88638C10.5678 3.48865 10.707 3.15058 10.9854 2.87217C11.2638 2.59376 11.6019 2.45456 11.9996 2.45456C12.3974 2.45456 12.7354 2.59376 13.0138 2.87217C13.2923 3.15058 13.4315 3.48865 13.4315 3.88638V4.55456C14.7042 4.87274 15.7383 5.5449 16.5337 6.57104C17.3292 7.59717 17.7269 8.77047 17.7269 10.0909V16.7727H19.636V18.6818H4.36328ZM11.9996 21.5455C11.4746 21.5455 11.0252 21.3585 10.6513 20.9847C10.2775 20.6108 10.0906 20.1614 10.0906 19.6364H13.9087C13.9087 20.1614 13.7218 20.6108 13.3479 20.9847C12.9741 21.3585 12.5246 21.5455 11.9996 21.5455ZM8.18146 16.7727H15.8178V10.0909C15.8178 9.04092 15.444 8.14206 14.6962 7.39433C13.9485 6.64661 13.0496 6.27274 11.9996 6.27274C10.9496 6.27274 10.0508 6.64661 9.30305 7.39433C8.55533 8.14206 8.18146 9.04092 8.18146 10.0909V16.7727Z" />
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

export function LimitsIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M6 19.75C4.26667 19.3 2.83333 18.3667 1.7 16.95C0.566667 15.5333 0 13.8833 0 12C0 10.1167 0.566667 8.46667 1.7 7.05C2.83333 5.63333 4.26667 4.7 6 4.25V6.35C4.81667 6.75 3.85417 7.46667 3.1125 8.5C2.37083 9.53333 2 10.7 2 12C2 13.3 2.37083 14.4667 3.1125 15.5C3.85417 16.5333 4.81667 17.25 6 17.65V19.75ZM14 20C11.7833 20 9.89583 19.2208 8.3375 17.6625C6.77917 16.1042 6 14.2167 6 12C6 9.78333 6.77917 7.89583 8.3375 6.3375C9.89583 4.77917 11.7833 4 14 4C15.1 4 16.1333 4.20833 17.1 4.625C18.0667 5.04167 18.9167 5.61667 19.65 6.35L18.25 7.75C17.7 7.2 17.0625 6.77083 16.3375 6.4625C15.6125 6.15417 14.8333 6 14 6C12.3333 6 10.9167 6.58333 9.75 7.75C8.58333 8.91667 8 10.3333 8 12C8 13.6667 8.58333 15.0833 9.75 16.25C10.9167 17.4167 12.3333 18 14 18C14.8333 18 15.6125 17.8458 16.3375 17.5375C17.0625 17.2292 17.7 16.8 18.25 16.25L19.65 17.65C18.9167 18.3833 18.0667 18.9583 17.1 19.375C16.1333 19.7917 15.1 20 14 20ZM20 16L18.6 14.6L20.2 13H13V11H20.2L18.6 9.4L20 8L24 12L20 16Z" />
    </svg>
  );
}

export function TravelIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8C2 7.45 2.19583 6.97917 2.5875 6.5875C2.97917 6.19583 3.45 6 4 6H8V4C8 3.45 8.19583 2.97917 8.5875 2.5875C8.97917 2.19583 9.45 2 10 2H14C14.55 2 15.0208 2.19583 15.4125 2.5875C15.8042 2.97917 16 3.45 16 4V6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4ZM10 6H14V4H10V6ZM20 15H15V17H9V15H4V19H20V15ZM11 15H13V13H11V15ZM4 13H9V11H15V13H20V8H4V13Z" />
    </svg>
  );
}

export function EditIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M12.4 15.35L8.65 11.6L16.95 3.3C17.15 3.1 17.3875 3 17.6625 3C17.9375 3 18.175 3.1 18.375 3.3L20.7 5.625C20.9 5.825 21 6.0625 21 6.3375C21 6.6125 20.9 6.85 20.7 7.05L12.4 15.35ZM12.4 12.5L18.6 6.325L17.675 5.4L11.5 11.6L12.4 12.5ZM11 21L13 19H22V21H11ZM5.075 21C4.30833 21 3.57083 20.85 2.8625 20.55C2.15417 20.25 1.53333 19.8333 1 19.3L7.625 12.7L10.225 15.3C10.4583 15.5333 10.6417 15.8 10.775 16.1C10.9083 16.4 10.975 16.7167 10.975 17.05C10.975 17.3833 10.9083 17.7042 10.775 18.0125C10.6417 18.3208 10.4583 18.5917 10.225 18.825L9.75 19.3C9.21667 19.8333 8.59583 20.25 7.8875 20.55C7.17917 20.85 6.44167 21 5.675 21H5.075ZM5.075 19H5.675C6.175 19 6.65833 18.9042 7.125 18.7125C7.59167 18.5208 8 18.25 8.35 17.9L8.825 17.425C8.925 17.325 8.975 17.2083 8.975 17.075C8.975 16.9417 8.925 16.825 8.825 16.725L7.625 15.525L4.225 18.9C4.35833 18.9333 4.5 18.9583 4.65 18.975C4.8 18.9917 4.94167 19 5.075 19Z" />
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M21.7734 18.925L19.9984 17.15V12H14.8484L10.8484 8.00001H19.9984V6.00001H8.84844L6.84844 4.00001H19.9984C20.5484 4.00001 21.0193 4.19585 21.4109 4.58751C21.8026 4.97918 21.9984 5.45001 21.9984 6.00001V18C21.9984 18.1667 21.9818 18.3292 21.9484 18.4875C21.9151 18.6458 21.8568 18.7917 21.7734 18.925ZM9.14844 12H3.99844V18H15.1484L9.14844 12ZM20.4484 23.3L17.1484 20H3.99844C3.44844 20 2.9776 19.8042 2.58594 19.4125C2.19427 19.0208 1.99844 18.55 1.99844 18V6.00001C1.99844 5.45001 2.19427 4.97918 2.58594 4.58751C2.9776 4.19585 3.44844 4.00001 3.99844 4.00001L5.99844 6.00001H3.99844V8.00001H5.14844L0.648438 3.50001L2.07344 2.07501L21.8734 21.875L20.4484 23.3Z" />
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
