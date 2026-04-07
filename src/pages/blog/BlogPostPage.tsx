import { useRenderReport } from "@/hooks/useRenderReport";
import { BlogPostArticleSection } from "@/features/blog/components/BlogPostArticleSection";
import { BlogPostCommentsSection } from "@/features/blog/components/BlogPostCommentsSection";
import { BlogPostLoadingState } from "@/features/blog/components/BlogPostLoadingState";
import { BlogPostNotFoundState } from "@/features/blog/components/BlogPostNotFoundState";
import { useBlogPostDetail } from "@/features/blog/hooks/useBlogPostDetail";

/**
 * Route `/blog/:id` : assemble les sections métier depuis `features/blog`.
 */
const BlogPostPage = () => {
  useRenderReport("BlogPostPage");
  const {
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
  } = useBlogPostDetail();

  if (loading) {
    return <BlogPostLoadingState message={t("admin.loading")} />;
  }

  if (!post) {
    return (
      <BlogPostNotFoundState message={t("blog.notFound")} backLabel={t("blog.backToBlog")} />
    );
  }

  return (
    <div>
      <BlogPostArticleSection
        post={post}
        title={displayTitle}
        content={displayContent}
        noContentLabel={t("blog.noContent")}
        backToBlog={t("blog.backToBlog")}
        shareLabel={t("blog.share")}
        onShare={shareOn}
        onCopyLink={copyLink}
        belowShare={
          <BlogPostCommentsSection
            comments={comments}
            commentForm={commentForm}
            setCommentForm={setCommentForm}
            submitting={submitting}
            onSubmit={handleComment}
            labels={{
              commentsTitle: t("blog.comments"),
              addComment: t("blog.addComment"),
              yourName: t("blog.yourName"),
              yourEmail: t("blog.yourEmail"),
              yourComment: t("blog.yourComment"),
              submitComment: t("blog.submitComment"),
              submitting: t("events.submitting"),
            }}
          />
        }
      />
    </div>
  );
};

export default BlogPostPage;
