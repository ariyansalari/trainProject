import { Badge } from "@/app";
import {
  IconCalendar,
  IconClock,
  IconComment,
  IconEye,
  IconUserProfile,
} from "@/app/_components/icons/icons";
import { BlogPostSummary } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type BlogPostCardProps = BlogPostSummary & {};
export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  thumbnailUrl,
  title,
  studyTime,
  author,
  postDate,
  isNew,
  numberOfViews,
  numberOfComments,
  slug,
}) => {
  return (
    <div className="card">
      {isNew && (
        <Badge
          variant="ghost"
          size="small"
          className="absolute right-2 top-2 !opacity-100"
        >
          جدید
        </Badge>
      )}
      <figure>
        <Image src={thumbnailUrl} alt={title} width={550} height={327} />
      </figure>
      <div className="card-body text-end">
        <Link href={`/blog/${slug}`} className="card-title mb-auto">
          {title}
        </Link>

        <div className="flex items-center justify-between mt-2">
          <Badge variant="info" size="tiny">
            <IconUserProfile width={16} height={16} />
            {author}
          </Badge>
          <Badge variant="neutral">
            <IconCalendar width={16} height={16} />
            {postDate}
          </Badge>
        </div>
      </div>

      <div className="card-footer text-xs justify-between">
        <div className="flex gap-1">
          <Badge variant="warning">
            <IconEye width={16} height={16} />
            {numberOfViews}
          </Badge>
          <Badge variant="accent">
            <IconComment width={16} height={16} />
            {numberOfComments}
          </Badge>
        </div>
        <span className="flex items-center gap-1">
          زمان مطالعه : {studyTime} دقیقه
          <IconClock width={16} height={16} />
        </span>
      </div>
    </div>
  );
};
