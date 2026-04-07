type BlogPostLoadingStateProps = {
  message: string;
};

export function BlogPostLoadingState({ message }: BlogPostLoadingStateProps) {
  return <div className="py-32 text-center text-muted-foreground">{message}</div>;
}
