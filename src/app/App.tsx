import { RootLayout } from "@/layouts/RootLayout";
import { AppProviders } from "./providers";
import { ErrorBoundary } from "./ErrorBoundary";
import { AppRouter } from "./router";

/**
 * Racine de l’application React : providers → layout → routes.
 */
export default function App() {
  return (
    <AppProviders>
      <RootLayout>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </RootLayout>
    </AppProviders>
  );
}
