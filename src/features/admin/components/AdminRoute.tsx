import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useStrapiAuth } from "@/hooks/useStrapiAuth";

type AdminRouteProps = {
  children: ReactElement;
};

/**
 * Protège les routes réservées aux administrateurs Strapi.
 */
export function AdminRoute({ children }: AdminRouteProps) {
  const { user, isAdmin, loading } = useStrapiAuth();

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-muted-foreground">
        Chargement…
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
