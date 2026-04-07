import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type BlogPostNotFoundStateProps = {
  message: string;
  backLabel: string;
};

export function BlogPostNotFoundState({ message, backLabel }: BlogPostNotFoundStateProps) {
  return (
    <div className="py-32 text-center">
      <p className="text-muted-foreground mb-4">{message}</p>
      <Button variant="outline-glow" asChild>
        <Link to="/blog">{backLabel}</Link>
      </Button>
    </div>
  );
}
