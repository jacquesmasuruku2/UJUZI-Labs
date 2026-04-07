/**
 * Clés TanStack Query centralisées (évite les typos et facilite l’invalidation).
 */
export const queryKeys = {
  blog: {
    posts: ["blog", "posts"] as const,
    post: (id: string) => ["blog", "post", id] as const,
    comments: (postId: string) => ["blog", "comments", postId] as const,
  },
} as const;
