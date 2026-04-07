import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/Preloader";
import { useGlobalLoader } from "@/hooks/useGlobalLoader";
import { useSubpageScrollReveal } from "@/hooks/useSubpageScrollReveal";
import { cn } from "@/lib/utils";

type RootLayoutProps = {
  children: ReactNode;
};

/**
 * Enveloppe commune : préchargeur, navigation, contenu principal, pied de page.
 */
export function RootLayout({ children }: RootLayoutProps) {
  const { isLoading, handlePreloaderComplete } = useGlobalLoader();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  useSubpageScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Preloader onComplete={handlePreloaderComplete} />
      <Navbar />
      <main className={cn("flex-1", !isHome && "site-inner-pages")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
