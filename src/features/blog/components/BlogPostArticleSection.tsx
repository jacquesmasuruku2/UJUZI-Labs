import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2, Send, Facebook, Twitter, Link as LinkIcon } from "lucide-react";
import { useRenderReport } from "@/hooks/useRenderReport";
import type { BlogPostDetail } from "../types";

type BlogPostArticleSectionProps = {
  post: BlogPostDetail;
  title: string;
  content: string | null;
  noContentLabel: string;
  backToBlog: string;
  shareLabel: string;
  onShare: (platform: "twitter" | "facebook" | "telegram") => void;
  onCopyLink: () => void;
  /** Contenu sous le bloc partage (ex. commentaires), même colonne que l’article */
  belowShare?: ReactNode;
};

/**
 * En-tête, image, corps de l’article et bloc partage.
 */
export function BlogPostArticleSection({
  post,
  title,
  content,
  noContentLabel,
  backToBlog,
  shareLabel,
  onShare,
  onCopyLink,
  belowShare,
}: BlogPostArticleSectionProps) {
  useRenderReport("BlogPostArticleSection");

  return (
    <>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> {backToBlog}
            </Link>
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">{title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {new Date(post.created_at).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {post.image_url && (
            <img
              src={post.image_url}
              alt={title}
              className="w-full rounded-xl mb-8 object-cover max-h-96"
            />
          )}

          <div className="prose prose-invert max-w-none mb-12 text-foreground leading-relaxed whitespace-pre-wrap">
            {content || noContentLabel}
          </div>

          <div className="flex items-center gap-3 border-t border-b border-border py-4 mb-12">
            <Share2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{shareLabel}:</span>
            <button
              type="button"
              onClick={() => onShare("twitter")}
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onShare("facebook")}
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onShare("telegram")}
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onCopyLink}
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Copy link"
            >
              <LinkIcon className="h-4 w-4" />
            </button>
          </div>

          {belowShare}
        </div>
      </section>
    </>
  );
}
