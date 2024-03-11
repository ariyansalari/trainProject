import { CourseSummary } from "@/types";
import { HomeHeroSection } from "./_components";
import { News_Cycle } from "next/font/google";
import { CourseCardList } from "./(courses)";

async function getNewestCoursers(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`https://api.classbon.com/api/courses/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  return res.json();
}
export default async function Home() {
  const newestCourses = await getNewestCoursers(4);

  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای به روز موندن، یاد گرفتن نکته های تازه ضروریه</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
