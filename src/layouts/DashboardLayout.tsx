import type { ReactNode } from "react";

/**
 * Enveloppe pour les écrans type tableau de bord (ex. admin).
 * À enrichir (sidebar dédiée, breadcrumbs) quand les routes l’utiliseront.
 */
export function DashboardLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen w-full bg-background">{children}</div>;
}
