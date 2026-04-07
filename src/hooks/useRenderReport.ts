import { useRef } from "react";

/**
 * En développement uniquement : affiche dans la console chaque rendu du composant appelant.
 * Utile pour repérer les re-rendus inutiles (à coupler avec React DevTools Profiler si besoin).
 *
 * @param label — Nom affiché dans les logs (ex. nom de la page ou du widget)
 */
export function useRenderReport(label: string): void {
  if (!import.meta.env.DEV) return;

  const count = useRef(0);
  count.current += 1;
  // eslint-disable-next-line no-console -- outil de debug volontaire en dev
  console.log(`[render] ${label} #${count.current}`);
}
