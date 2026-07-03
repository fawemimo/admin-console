"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-label-md font-bold text-on-surface-variant block" htmlFor="email">
          Email Address
        </label>
        <div className="relative">
          <Icon name="mail" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="you@institution.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-label-md font-bold text-on-surface-variant block" htmlFor="password">
            Password
          </label>
          <Link href="/forgot-password" className="text-label-md text-secondary hover:underline">
            Forgot?
          </Link>
        </div>
        <div className="relative">
          <Icon name="lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-12 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
          >
            <Icon name={showPassword ? "visibility_off" : "visibility"} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          id="remember"
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
        />
        <label htmlFor="remember" className="text-body-sm text-on-surface-variant cursor-pointer">
          Remember this device
        </label>
      </div>

      <button
        type="submit"
        className="w-full h-12 bg-secondary text-white font-label-md tracking-wider uppercase rounded-lg hover:bg-secondary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
      >
        <span>Sign In</span>
        <Icon name="arrow_forward_ios" className="text-[20px] group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-center text-body-sm text-on-surface-variant">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-secondary font-bold hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
