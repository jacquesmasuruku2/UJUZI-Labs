/**
 * Variables d'environnement exposées au client (préfixe VITE_).
 * Centralise la lecture pour éviter les fautes de frappe et documenter les clés.
 * Utiliser `||` pour les chaînes : une env vide "" doit retomber sur la valeur par défaut.
 */
export const env = {
  strapiUrl: import.meta.env.VITE_STRAPI_URL || "http://localhost:1337",
  strapiAdminRole: import.meta.env.VITE_STRAPI_ADMIN_ROLE || "Administrator",
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;
