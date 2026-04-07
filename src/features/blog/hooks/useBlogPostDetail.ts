import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { mediaToUrl, strapiFetch } from "@/lib/strapi";
import type { BlogComment, BlogCommentFormState, BlogPostDetail } from "../types";

type StrapiBlogPostItem = {
  id: string | number;
  attributes?: {
    title?: string;
    title_fr?: string | null;
    content?: string | null;
    content_fr?: string | null;
    excerpt?: string | null;
    excerpt_fr?: string | null;
    category?: string;
    published?: boolean;
    createdAt?: string;
    created_at?: string;
    image?: unknown;
  };
};

type StrapiBlogCommentItem = {
  id: string | number;
  attributes?: {
    author_name?: string;
    content?: string;
    createdAt?: string;
    created_at?: string;
  };
};

function mapCommentsFromResponse(data: unknown[]): BlogComment[] {
  return data.map((c) => {
    const item = c as StrapiBlogCommentItem;
    return {
      id: String(item.id),
      author_name: item.attributes?.author_name ?? "",
      content: item.attributes?.content ?? "",
      created_at: item.attributes?.createdAt ?? item.attributes?.created_at ?? "",
    };
  });
}

/**
 * Données et actions pour la page article + commentaires.
 */
export function useBlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isFr = i18n.language === "fr";

  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState<BlogCommentFormState>({
    author_name: "",
    author_email: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setPost(null);
      return;
    }

    setLoading(true);

    const fetchData = async () => {
      try {
        const [postRes, commentsRes] = await Promise.all([
          strapiFetch<{ data: unknown }>(`/api/blog-posts/${id}?populate=image`),
          strapiFetch<{ data: unknown[] }>(
            `/api/blog-comments?filters[post][id][$eq]=${id}&sort=createdAt:asc&pagination[pageSize]=100`
          ),
        ]);

        const detail = postRes.data as StrapiBlogPostItem | undefined;
        if (detail?.attributes) {
          const attrs = detail.attributes;
          if (attrs.published === true) {
            setPost({
              id: String(detail.id),
              title: attrs.title ?? "",
              title_fr: attrs.title_fr ?? null,
              content: attrs.content ?? null,
              content_fr: attrs.content_fr ?? null,
              excerpt: attrs.excerpt ?? null,
              excerpt_fr: attrs.excerpt_fr ?? null,
              category: attrs.category ?? "",
              created_at: attrs.createdAt ?? attrs.created_at ?? "",
              image_url: mediaToUrl(attrs.image),
            });
          } else {
            setPost(null);
          }
        }

        if (commentsRes?.data?.length) {
          setComments(mapCommentsFromResponse(commentsRes.data));
        } else {
          setComments([]);
        }
      } catch {
        setPost(null);
        setComments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const refetchComments = useCallback(async () => {
    if (!id) return;
    const commentsRes = await strapiFetch<{ data: unknown[] }>(
      `/api/blog-comments?filters[post][id][$eq]=${id}&sort=createdAt:asc&pagination[pageSize]=100`
    );
    setComments(mapCommentsFromResponse(commentsRes.data ?? []));
  }, [id]);

  const handleComment = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!id) return;
      setSubmitting(true);
      try {
        await strapiFetch("/api/blog-comments", {
          method: "POST",
          body: JSON.stringify({
            data: {
              post: id,
              author_name: commentForm.author_name,
              author_email: commentForm.author_email,
              content: commentForm.content,
            },
          }),
        });

        toast({ title: t("blog.commentAdded") });
        setCommentForm({ author_name: "", author_email: "", content: "" });
        await refetchComments();
      } catch {
        toast({ title: t("admin.error"), variant: "destructive" });
      }
      setSubmitting(false);
    },
    [id, commentForm, t, toast, refetchComments]
  );

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareTitle = useMemo(() => {
    if (!post) return "";
    return isFr && post.title_fr ? post.title_fr : post.title;
  }, [post, isFr]);

  const shareOn = useCallback(
    (platform: "twitter" | "facebook" | "telegram") => {
      const urls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      } as const;
      window.open(urls[platform], "_blank");
    },
    [shareTitle, shareUrl]
  );

  const copyLink = useCallback(() => {
    void navigator.clipboard.writeText(shareUrl);
    toast({ title: t("blog.linkCopied") });
  }, [shareUrl, t, toast]);

  const displayTitle = useMemo(() => {
    if (!post) return "";
    return isFr && post.title_fr ? post.title_fr : post.title;
  }, [post, isFr]);

  const displayContent = useMemo(() => {
    if (!post) return null;
    return isFr && post.content_fr ? post.content_fr : post.content;
  }, [post, isFr]);

  return {
    id,
    post,
    comments,
    loading,
    commentForm,
    setCommentForm,
    submitting,
    handleComment,
    shareOn,
    copyLink,
    displayTitle,
    displayContent,
    t,
  };
}
