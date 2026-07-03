"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, BOTTOM_NAV_ITEMS } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col bg-primary border-r border-outline-variant z-40">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary-container rounded-sm flex items-center justify-center text-on-secondary-container">
            <Icon name="analytics" filled />
          </div>
          <div>
            <h1 className="text-headline-md font-bold text-on-primary">ES Payment</h1>
            <p className="text-[10px] uppercase tracking-widest text-on-primary-fixed-variant font-bold">
              Institutional Terminal
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = !!pathname && (pathname === item.href || pathname.startsWith(item.href + "/"));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-secondary text-on-secondary font-bold"
                  : "text-on-primary-fixed-variant hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon name={item.icon} filled={isActive} />
              <span className="text-body-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-6 border-t border-white/10 mt-auto">
        <button className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
          <Icon name="send" />
          Quick Transfer
        </button>
        <div className="mt-4 space-y-1">
          {BOTTOM_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-primary-fixed-variant hover:text-white hover:bg-white/5 transition-colors"
            >
              <Icon name={item.icon} />
              <span className="text-body-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
