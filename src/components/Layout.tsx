import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { useGlobalLoader } from "@/hooks/useGlobalLoader";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isLoading, handlePreloaderComplete } = useGlobalLoader();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Preloader onComplete={handlePreloaderComplete} />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
