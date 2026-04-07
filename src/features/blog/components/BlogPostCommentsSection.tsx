import type { Dispatch, FormEvent, SetStateAction } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRenderReport } from "@/hooks/useRenderReport";
import type { BlogComment, BlogCommentFormState } from "../types";

type BlogPostCommentsSectionProps = {
  comments: BlogComment[];
  commentForm: BlogCommentFormState;
  setCommentForm: Dispatch<SetStateAction<BlogCommentFormState>>;
  submitting: boolean;
  onSubmit: (e: FormEvent) => void | Promise<void>;
  labels: {
    commentsTitle: string;
    addComment: string;
    yourName: string;
    yourEmail: string;
    yourComment: string;
    submitComment: string;
    submitting: string;
  };
};

/**
 * Liste des commentaires et formulaire d’ajout.
 */
export function BlogPostCommentsSection({
  comments,
  commentForm,
  setCommentForm,
  submitting,
  onSubmit,
  labels,
}: BlogPostCommentsSectionProps) {
  useRenderReport("BlogPostCommentsSection");

  return (
    <div className="pb-4">
      <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-primary" />
        {labels.commentsTitle} ({comments.length})
      </h2>

      {comments.map((c) => (
        <div key={c.id} className="glass rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-sm">{c.author_name}</span>
            <span className="text-xs text-muted-foreground">
              {new Date(c.created_at).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{c.content}</p>
        </div>
      ))}

      <form onSubmit={onSubmit} className="glass rounded-xl p-6 mt-6 space-y-4">
        <h3 className="font-display font-semibold">{labels.addComment}</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder={labels.yourName}
            value={commentForm.author_name}
            onChange={(e) =>
              setCommentForm((prev) => ({ ...prev, author_name: e.target.value }))
            }
            required
          />
          <Input
            type="email"
            placeholder={labels.yourEmail}
            value={commentForm.author_email}
            onChange={(e) =>
              setCommentForm((prev) => ({ ...prev, author_email: e.target.value }))
            }
            required
          />
        </div>
        <Textarea
          placeholder={labels.yourComment}
          value={commentForm.content}
          onChange={(e) => setCommentForm((prev) => ({ ...prev, content: e.target.value }))}
          required
          rows={4}
        />
        <Button type="submit" variant="glow" disabled={submitting}>
          {submitting ? labels.submitting : labels.submitComment}
        </Button>
      </form>
    </div>
  );
}
