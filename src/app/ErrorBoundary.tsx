import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

/**
 * Capture les erreurs de rendu React et évite un écran blanc sans feedback.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="text-2xl font-semibold">Une erreur est survenue</h1>
          <p className="text-muted-foreground max-w-md">
            Rechargez la page ou revenez à l&apos;accueil. Si le problème persiste, contactez l&apos;équipe.
          </p>
          <Button asChild>
            <Link to="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
