const API_BASE = "http://127.0.0.1:8000/staff/users";

type RequestOptions = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string>;
};

export async function apiClient(endpoint: string, options: RequestOptions = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = `${API_BASE}${endpoint}`;
  const body = options.body ? JSON.stringify(options.body) : undefined;

  console.log("[API Request]", { method: options.method || "POST", url, body: options.body });

  const res = await fetch(url, {
    method: options.method || "POST",
    headers,
    body,
  });

  const text = await res.text();

  console.log("[API Response]", { status: res.status, text });

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Invalid JSON response: ${text.slice(0, 200)}`);
  }

  if (!res.ok) {
    throw new Error(data.message || data.error || "Request failed");
  }

  return data;
}

export async function loginAPI(email: string, password: string) {
  return apiClient("/login/", { body: { email, password } });
}

export async function verifyOTPAPI(otp: string) {
  return apiClient("/verify-login-otp/", { body: { otp_code: otp } });
}

export async function refreshTokenAPI(refresh_token: string) {
  return apiClient("/token/refresh", { body: { refresh_token } });
}

export async function resendOTPAPI(email: string) {
  return apiClient("/resend-login-otp/", { body: { email } });
}
