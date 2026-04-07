/**
 * Couche « services » : accès données et HTTP.
 * - Strapi : fonctions dans `@/lib/strapi` (réexportées ici pour découvrabilité).
 * - Autres API : `fetchJson` / `ApiError` dans `./api/client`.
 */
export { ApiError, fetchJson } from "./api/client";
export { queryKeys } from "./api/query-keys";
export * from "./storage";
export {
  strapiFetch,
  getJwtFromStorage,
  setJwtToStorage,
  clearJwtFromStorage,
  mediaToUrl,
  mediaArrayToUrls,
} from "@/lib/strapi";
