"use client";

import { Icon } from "@/components/ui/Icon";

type TopBarProps = {
  title?: string;
  showBack?: boolean;
  user?: { name: string; role: string };
};

export function TopBar({ title, showBack, user }: TopBarProps) {
  return (
    <header className="fixed top-0 left-64 right-0 z-30 bg-primary shadow-sm border-b border-white/10 h-16 flex justify-between items-center px-6 py-2">
      <div className="flex items-center gap-4 flex-1">
        {showBack && (
          <button className="text-on-primary-fixed-variant hover:text-white transition-colors">
            <Icon name="arrow_back" />
          </button>
        )}
        {title && (
          <h2 className="text-headline-md font-bold text-on-primary">{title}</h2>
        )}
        <div className="relative w-96">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-on-primary-fixed-variant"
          />
          <input
            className="w-full pl-10 pr-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-on-primary-fixed-variant focus:ring-2 focus:ring-secondary-container focus:border-secondary-container text-body-sm transition-all"
            placeholder="Search accounts, trades, or entities..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button className="relative p-1.5 text-on-primary-fixed-variant hover:text-white transition-colors">
            <Icon name="notifications" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
          </button>
          <button className="p-1.5 text-on-primary-fixed-variant hover:text-white transition-colors">
            <Icon name="help_outline" />
          </button>
        </div>

        <button className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-lg font-bold text-body-sm hover:opacity-90 transition-opacity">
          New Transaction
        </button>

        <div className="flex items-center gap-2 pl-4 border-l border-white/10">
          {user && (
            <div className="text-right">
              <p className="font-bold text-body-sm leading-none text-white">{user.name}</p>
              <p className="text-label-md text-on-primary-fixed-variant">{user.role}</p>
            </div>
          )}
          <img
            alt="User profile"
            className="w-10 h-10 rounded-full border border-white/20 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXazJB9Wj7hlfiTNxDKbuLwATEu149bsD4i9F1qeQlMUZoMAqtBkf0n9BFg9n62GnRdkUq3iF_OQo3nUsK3F-u_Qnm16p5BIBQ6nXG9HGxpeD2ZhkPVaBciGY08EfdeBPK11W-woimRKeFTeU2xX-PdnXtoWoX5V3t0YeUTmJ-4Dar5fY9rUR_Lef_1IsUAc3mmmtPcAFeeWdBi9Mi2K-PztDWsq7HHEHLpXYkerwqOiLPvzSwen7JeQ"
          />
        </div>
      </div>
    </header>
  );
}
