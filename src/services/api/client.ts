/**
 * Client HTTP générique pour les API hors Strapi (webhooks, services tiers, etc.).
 * Pour Strapi, préférer `strapiFetch` depuis `@/lib/strapi`.
 */

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const text = await res.text();
  const data = text ? (JSON.parse(text) as unknown) : null;

  if (!res.ok) {
    throw new ApiError(res.statusText || "Request failed", res.status, data);
  }

  return data as T;
}
