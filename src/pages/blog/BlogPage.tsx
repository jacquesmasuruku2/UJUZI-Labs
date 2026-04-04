import { useTranslation } from "react-i18next";
import { BlogListView } from "@/features/blog/components/BlogListView";
import { useBlogPosts } from "@/features/blog/hooks/useBlogPosts";
import { useRenderReport } from "@/hooks/useRenderReport";

/**
 * Route `/blog` : la vue métier est dans `features/blog`, cette page ne fait qu’assembler.
 */
const BlogPage = () => {
  useRenderReport("BlogPage");
  const { t } = useTranslation();
  const { loading, displayPosts, getTitle, getExcerpt } = useBlogPosts();

  return (
    <BlogListView
      loading={loading}
      displayPosts={displayPosts}
      getTitle={getTitle}
      getExcerpt={getExcerpt}
      title={t("blog.title")}
      subtitle={t("blog.subtitle")}
      readMore={t("blog.readMore")}
    />
  );
};

export default BlogPage;
