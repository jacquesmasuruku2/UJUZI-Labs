export type BlogPostListItem = {
  id: string;
  title: string;
  title_fr: string | null;
  excerpt: string | null;
  excerpt_fr: string | null;
  category: string;
  created_at: string;
};

/** Article détaillé (page `/blog/:id`) */
export type BlogPostDetail = {
  id: string;
  title: string;
  title_fr: string | null;
  content: string | null;
  content_fr: string | null;
  excerpt: string | null;
  excerpt_fr: string | null;
  category: string;
  created_at: string;
  image_url: string | null;
};

export type BlogComment = {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
};

export type BlogCommentFormState = {
  author_name: string;
  author_email: string;
  content: string;
};
