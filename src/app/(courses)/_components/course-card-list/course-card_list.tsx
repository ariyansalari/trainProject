import { CourseSummary } from "@/types";
import React from "react";
import { CourseCard } from "./partials";

type CourseCardListProps = {
  courses: CourseSummary[];
};
export const CourseCardList: React.FC<CourseCardListProps> = ({
  courses,
}: CourseCardListProps) => {
  return (
    <div dir="rtl" className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
{
  courses.map((course)=>(
    <CourseCard key={`course-${course.slug}`} {...course}/>
  ))
}
    </div>
  );
};
