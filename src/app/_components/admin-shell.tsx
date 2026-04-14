"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

const iconClassName = "h-4 w-4";

function DashboardIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4h7v7H4V4Zm0 9h7v7H4v-7Zm9-9h7v11h-7V4Zm0 13h7v3h-7v-3Z" fill="currentColor" />
    </svg>
  );
}

function TeamIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0H5Zm13-12a3 3 0 1 0-2.7-4.3 5.9 5.9 0 0 1 2.7 4.3Z" fill="currentColor" />
    </svg>
  );
}

function CardIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3V6Zm0 5h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Zm4 4h4v2H7v-2Z" fill="currentColor" />
    </svg>
  );
}

function HelpIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 17Zm1.5-5.5a2 2 0 0 0-1 1.7h-2a4 4 0 1 1 4.5-3.96 3.5 3.5 0 0 1-1.5 2.26Z" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 4 6v6c0 5.2 3.4 9.96 8 11 4.6-1.04 8-5.8 8-11V6l-8-3Zm-1 13-3-3 1.4-1.4 1.6 1.58 3.6-3.58L16 11l-5 5Z" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7 8-5H4l8 5Z" fill="currentColor" />
    </svg>
  );
}

function SettingsIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m20.8 13.5-1.4-.8a7.8 7.8 0 0 0 0-1.4l1.4-.8a1 1 0 0 0 .4-1.3l-1.5-2.6a1 1 0 0 0-1.3-.4l-1.4.8a7.6 7.6 0 0 0-1.2-.7l-.2-1.6a1 1 0 0 0-1-.9h-3a1 1 0 0 0-1 .9L9.4 6a7.6 7.6 0 0 0-1.2.7l-1.4-.8a1 1 0 0 0-1.3.4L4 9a1 1 0 0 0 .4 1.3l1.4.8a7.8 7.8 0 0 0 0 1.4l-1.4.8A1 1 0 0 0 4 15l1.5 2.6a1 1 0 0 0 1.3.4l1.4-.8c.4.3.8.5 1.2.7l.2 1.6a1 1 0 0 0 1 .9h3a1 1 0 0 0 1-.9l.2-1.6c.4-.2.8-.4 1.2-.7l1.4.8a1 1 0 0 0 1.3-.4L21.2 15a1 1 0 0 0-.4-1.5ZM12 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" fill="currentColor" />
    </svg>
  );
}

function BellIcon({ className = iconClassName }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4a5 5 0 0 0-5 5v2.1c0 .7-.2 1.4-.6 2l-1.1 1.6A1 1 0 0 0 6.2 16h11.6a1 1 0 0 0 .9-1.3l-1.1-1.6a3.4 3.4 0 0 1-.6-2V9a5 5 0 0 0-5-5Zm0 16a2.5 2.5 0 0 0 2.4-2h-4.8A2.5 2.5 0 0 0 12 20Z"
        fill="currentColor"
      />
    </svg>
  );
}

type NavigationItem = {
  label: string;
  href: string;
  icon: (props: IconProps) => ReactNode;
};

const mainItems: NavigationItem[] = [
  { label: "Dashboard", href: "/admin-dashboard", icon: DashboardIcon },
  { label: "Laboratorian", href: "/admin-dashboard/labarotorian", icon: TeamIcon },
  { label: "Subscription", href: "/admin-dashboard/subscription", icon: CardIcon },
];

const supportItems: NavigationItem[] = [
  { label: "FAQ", href: "/admin-dashboard/faq", icon: HelpIcon },
  {
    label: "Privacy Policy",
    href: "/admin-dashboard/privacy-policy",
    icon: ShieldIcon,
  },
  {
    label: "Contact Message",
    href: "/admin-dashboard/contact-message",
    icon: MailIcon,
  },
  { label: "Settings", href: "/admin-dashboard/setttings", icon: SettingsIcon },
];

type AdminShellProps = {
  children: ReactNode;
};

function SidebarItem({ item, pathname }: { item: NavigationItem; pathname: string }) {
  const isActive =
    pathname === item.href ||
    (item.href !== "/admin-dashboard" && pathname.startsWith(`${item.href}/`));
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
        isActive
          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
          : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-100"
      }`}
    >
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${
          isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
        }`}
      >
        <Icon />
      </span>
      <span>{item.label}</span>
    </Link>
  );
}

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const routeTitle = pathname
    .replace("/admin-dashboard", "")
    .split("/")
    .filter(Boolean)
    .join(" ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const currentTitle = routeTitle || "Dashboard";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen w-full flex-col lg:flex-row">
        <aside className="flex w-full flex-col border-b border-slate-200 bg-white px-4 py-4 lg:w-80 lg:border-r lg:border-b-0 lg:px-6 lg:py-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-900">Admin</h1>
          </div>

          <nav className="mt-6 flex-1 space-y-6">
            <div className="space-y-2">
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Main Navigation
              </p>
              {mainItems.map((item) => (
                <SidebarItem key={item.href} item={item} pathname={pathname} />
              ))}
            </div>

            <div className="space-y-2">
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Support & Policy
              </p>
              {supportItems.map((item) => (
                <SidebarItem key={item.href} item={item} pathname={pathname} />
              ))}
            </div>
          </nav>

          <div className="mt-auto pt-6">
            <button
              type="button"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 bg-slate-50">
          <header className="flex flex-col gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Admin Dashboard
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">
                {currentTitle}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Notifications"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100"
              >
                <BellIcon className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500" />
              </button>
              <button
                type="button"
                className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Admin Profile
              </button>
            </div>
          </header>
          <section className="p-4 sm:p-6 lg:p-8">
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}
