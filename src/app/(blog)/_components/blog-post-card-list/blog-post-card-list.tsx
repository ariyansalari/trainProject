import { BlogPostSummary } from "@/types";
import React from "react";
import { BlogPostCard } from "..";

type BlogPostCardListProps = {
  posts: BlogPostSummary[];
};
export const BlogPostCardList: React.FC<BlogPostCardListProps> = ({
  posts,
}) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-end gap-6 mt-10">
      {posts.map((post) => (
        <BlogPostCard key={`blog-post-${post.slug}`} {...post} />
      ))}
    </div>
  );
};
