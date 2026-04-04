import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRenderReport } from "@/hooks/useRenderReport";
import type { BlogPostListItem } from "../types";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

type BlogListViewProps = {
  loading: boolean;
  displayPosts: BlogPostListItem[];
  getTitle: (p: BlogPostListItem) => string;
  getExcerpt: (p: BlogPostListItem) => string;
  title: string;
  subtitle: string;
  readMore: string;
};

/**
 * Vue liste du blog (UI seule). Les données viennent de `useBlogPosts`.
 */
export function BlogListView({
  loading,
  displayPosts,
  getTitle,
  getExcerpt,
  title,
  subtitle,
  readMore,
}: BlogListViewProps) {
  useRenderReport("BlogListView");

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center text-muted-foreground py-12">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-colors flex flex-col"
                >
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full self-start">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-4 mb-2">{getTitle(post)}</h3>
                  <p className="text-sm text-muted-foreground flex-1 mb-4">{getExcerpt(post)}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <Button variant="link" className="p-0 h-auto text-primary text-sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        {readMore} <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
