import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { useGlobalLoader } from "@/hooks/useGlobalLoader";
import { useSubpageScrollReveal } from "@/hooks/useSubpageScrollReveal";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isLoading, handlePreloaderComplete } = useGlobalLoader();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  useSubpageScrollReveal();

  return (
    <div className="ujuzi-site-shell min-h-screen flex flex-col text-foreground transition-colors duration-300">
      <Preloader onComplete={handlePreloaderComplete} />
      <Navbar />
      <main className={cn("flex-1", !isHome && "site-inner-pages")}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
