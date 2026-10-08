"use client";

import { useRouter } from "next/navigation";

import {
  BellIcon,
  ChevronRight,
  PinIcon,
  SupportIcon,
  UserIcon,
} from "../../components/icons";
import { TabBar, TopBar } from "../../components/ui";

/**
 * Profile Settings — PL-9, and the entry point for F-8's
 * Profile > Edit Password > All done > Go to Home path.
 *
 * PL-9: the Select Language option is removed (BR-9), and the email address
 * replaces the username handle under the name — the username *is* the email
 * now, so a separate handle would contradict RG-6.
 */

const ROWS = [
  { key: "password", label: "Edit Password", Icon: PinIcon, href: "/profile/edit-password" },
  { key: "manage", label: "Manage Profile", Icon: UserIcon },
  { key: "notifications", label: "Notification Preferences", Icon: BellIcon },
  { key: "support", label: "Contact Support", Icon: SupportIcon },
];

export default function ProfilePage() {
  const router = useRouter();

  return (
    <main className="screen">
      <TopBar title="Profile" />

      <div className="profile-head">
        <span className="profile-avatar">
          <UserIcon size={30} />
        </span>
        <p className="profile-name">Jane Doe</p>
        {/* PL-9: the email address, not a username handle. */}
        <p className="profile-email">jane.doe@email.com</p>
      </div>

      <div className="rows">
        {ROWS.map(({ key, label, Icon, href }) =>
          href ? (
            <button
              key={key}
              type="button"
              className="row"
              onClick={() => router.push(href)}
            >
              <span className="row__icon">
                <Icon />
              </span>
              <p className="row__label">{label}</p>
              <span className="row__right">
                <ChevronRight />
              </span>
            </button>
          ) : (
            <div key={key} className="row">
              <span className="row__icon">
                <Icon />
              </span>
              <p className="row__label">{label}</p>
              <span className="row__right">
                <ChevronRight />
              </span>
            </div>
          )
        )}
      </div>

      <TabBar active="profile" />
    </main>
  );
}
