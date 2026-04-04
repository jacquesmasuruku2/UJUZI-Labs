/**
 * Métadonnées du site (SEO, partage, liens canoniques).
 * `VITE_SITE_URL` : origine publique sans slash final, ex. https://ujuzilabs.com
 */
export const site = {
  name: "UJUZI Labs",
  shortName: "UJUZI",
  defaultDescription:
    "UJUZI Labs — centre d'innovation Web3 en RD Congo : formation, incubation et communauté.",
  /** URL de base pour canonical / OG (fallback prod) */
  origin: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "https://ujuzilabs.com",
} as const;

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${site.origin}${p}`;
}
