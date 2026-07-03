"use client";

import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

type AppShellProps = {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  user?: { name: string; role: string };
};

export function AppShell({ children, title, showBack, user }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopBar title={title} showBack={showBack} user={user} />
      <main className="ml-64 mt-16 p-6 min-h-[calc(100vh-64px)]">
        <div className="max-w-[1440px] mx-auto space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
