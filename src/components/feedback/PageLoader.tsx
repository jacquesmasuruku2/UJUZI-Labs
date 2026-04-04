import { Loader2 } from "lucide-react";

/**
 * Affiché pendant le chargement des routes en lazy (Suspense).
 */
export function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 text-muted-foreground">
      <Loader2 className="h-10 w-10 animate-spin" aria-hidden />
      <p className="text-sm">Chargement…</p>
    </div>
  );
}
