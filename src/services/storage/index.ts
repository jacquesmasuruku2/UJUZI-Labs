const PREFIX = "ujuzi_";

export function storageKey(key: string): string {
  return `${PREFIX}${key}`;
}

export function getStoredJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(storageKey(key));
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function setStoredJson(key: string, value: unknown): void {
  localStorage.setItem(storageKey(key), JSON.stringify(value));
}

export function removeStored(key: string): void {
  localStorage.removeItem(storageKey(key));
}
