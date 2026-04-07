import type { ReactNode } from "react";
import { RootLayout } from "./RootLayout";

/**
 * Layout marketing (site vitrine). Aujourd’hui aligné sur `RootLayout` ;
 * peut diverger plus tard (bannières, A/B, tracking par segment).
 */
export function MarketingLayout({ children }: { children: ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
