"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  completeOTP: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mfaRequired, setMfaRequired] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setMfaRequired(true);
    localStorage.setItem("pending_email", email);
    setIsLoading(false);
  };

  const completeOTP = () => {
    const email = localStorage.getItem("pending_email");
    const mockUser: User = {
      id: "1",
      name: email?.split("@")[0] || "User",
      email: email || "",
      role: "Treasury Manager",
    };
    localStorage.setItem("access_token", "mock-jwt-token-" + Date.now());
    localStorage.setItem("user", JSON.stringify(mockUser));
    localStorage.removeItem("pending_email");
    setUser(mockUser);
    setMfaRequired(false);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, completeOTP }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}