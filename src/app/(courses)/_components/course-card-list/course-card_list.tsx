import { CourseSummary } from "@/types";
import React from "react";
import { CourseCard } from "./partials";
import { API_URL } from "@/configs";
async function getNewestCoursers(count: number): Promise<CourseSummary[]> {
  await new Promise((resolve)=>setTimeout(resolve,2000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    cache: "no-store",
  }); 
  return res.json();
}
type CourseCardListProps = {
  courses: CourseSummary[];
};
export const CourseCardList: React.FC<CourseCardListProps> =async({
  courses,
}: CourseCardListProps) => {
  const newestCoursesData =await getNewestCoursers(4);

  return (
    <div dir="rtl" className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
{
  newestCoursesData?.map((course)=>(
    <CourseCard key={`course-${course.slug}`} {...course}/>
  ))
}
    </div>
  );
};
