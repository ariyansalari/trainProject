import { Badge, Price } from "@/app";
import { IconArrowLeftFill, IconClock } from "@/app/_components/icons/icons";
import { CourseSummary } from "@/types";
import Image from "next/image";
import Link from "next/link";
export type CourseCardProps = CourseSummary & {};
export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  slug,
  duration,
  basePrice,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          width={550}
          height={327}
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`course/${slug}`}>{title}</Link>
        <p className="text-wrap">{subTitle}</p>
        <div className="flex items-center justify-between mt-3 ">
        <Badge variant="warning">
         <IconClock  width={16} height={16} />{duration}
          </Badge>  
          <Price price={basePrice} size="small" />
        </div>
      </div>
      <Link href={`courses/${slug}`} className="card-footer justify-center animated-icon">
        مشاهده جزییات دوره
        <IconArrowLeftFill fill="currentColor"/>
      </Link>
    </div>
  );
};
