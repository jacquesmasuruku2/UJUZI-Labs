import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { strapiFetch } from "@/lib/strapi";
import type { BlogPostListItem } from "../types";

type StrapiBlogPostItem = {
  id: string | number;
  attributes?: {
    title?: string;
    title_fr?: string | null;
    excerpt?: string | null;
    excerpt_fr?: string | null;
    category?: string;
    createdAt?: string;
    created_at?: string;
  };
};

/**
 * Charge la liste des articles (Strapi + repli i18n) pour la page blog.
 */
export function useBlogPosts() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<BlogPostListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const isFr = i18n.language === "fr";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await strapiFetch<{ data: unknown[] }>(
          "/api/blog-posts?filters[published][$eq]=true&sort=createdAt:desc&pagination[pageSize]=100"
        );
        const items = res.data || [];
        const mapped: BlogPostListItem[] = items
          .map((item) => {
            const it = item as StrapiBlogPostItem;
            return {
              id: String(it.id),
              title: it.attributes?.title ?? "",
              title_fr: it.attributes?.title_fr ?? null,
              excerpt: it.attributes?.excerpt ?? null,
              excerpt_fr: it.attributes?.excerpt_fr ?? null,
              category: it.attributes?.category ?? "",
              created_at: it.attributes?.createdAt ?? it.attributes?.created_at ?? "",
            };
          })
          .filter((p) => p.id && p.created_at);
        if (mapped.length) setPosts(mapped);
      } catch {
        // fallback : hardcoded ci-dessous
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const hardcodedPosts = useMemo<BlogPostListItem[]>(
    () => [
      { id: "1", title: t("blog.p1Title"), title_fr: null, excerpt: t("blog.p1Excerpt"), excerpt_fr: null, category: "Announcement", created_at: "2026-03-01" },
      { id: "2", title: t("blog.p2Title"), title_fr: null, excerpt: t("blog.p2Excerpt"), excerpt_fr: null, category: "Event Recap", created_at: "2026-02-20" },
      { id: "3", title: t("blog.p3Title"), title_fr: null, excerpt: t("blog.p3Excerpt"), excerpt_fr: null, category: "Education", created_at: "2026-02-10" },
      { id: "4", title: t("blog.p4Title"), title_fr: null, excerpt: t("blog.p4Excerpt"), excerpt_fr: null, category: "Innovation", created_at: "2026-01-28" },
      { id: "5", title: t("blog.p5Title"), title_fr: null, excerpt: t("blog.p5Excerpt"), excerpt_fr: null, category: "Community", created_at: "2026-01-15" },
      { id: "6", title: t("blog.p6Title"), title_fr: null, excerpt: t("blog.p6Excerpt"), excerpt_fr: null, category: "Education", created_at: "2026-01-05" },
    ],
    [t]
  );

  const displayPosts = posts.length > 0 ? posts : hardcodedPosts;

  const getTitle = useCallback(
    (p: BlogPostListItem) => (isFr && p.title_fr ? p.title_fr : p.title),
    [isFr]
  );

  const getExcerpt = useCallback(
    (p: BlogPostListItem) => (isFr && p.excerpt_fr ? p.excerpt_fr : (p.excerpt ?? "")),
    [isFr]
  );

  return { loading, displayPosts, getTitle, getExcerpt, t };
}
