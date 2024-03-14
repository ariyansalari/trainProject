import { BlogPostSummary, CourseSummary } from "@/types";
import { Button, CardPlaceholder, Feature, HomeHeroSection, Testimonial } from "./_components";
import { CourseCardList } from "./(courses)";
import { IconArrowLeftFill } from "./_components/icons/icons";
import { homeFeatures, testimonials } from "@/data";
import { BlogPostCardList } from "./(blog)";
import { API_URL } from "@/configs";
import { Suspense } from "react";

async function getNewestPosts(count: number): Promise<BlogPostSummary[]> {
  const res = await fetch(`${API_URL}/blog/newest/${count}`, {
    cache: "no-store",

    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  return res.json();
}
export default async function Home() {
  const newestBlogPostsData = getNewestPosts(4);

  const [newestBlogPost] = await Promise.all([newestBlogPostsData]);

  return (
    <>
      <HomeHeroSection />
      <section className="dark:bg-base-75 mt-10">
        <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5">
          {homeFeatures.map((item) => (
            <Feature feature={item} key={`features of ${item.title}`} />
          ))}
        </div>
      </section>
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای به روز موندن، یاد گرفتن نکته های تازه ضروریه</p>
        </div>
        <Suspense fallback={<CardPlaceholder count={4} className="mt-5"/>}>

        <CourseCardList courses={[]} />
        </Suspense>

      </section>
      <section className="px-2 my-40">
        {/* <div className="sticky top-0 pt-0 text-center"> */}
        <div className="relative pt-0 text-center">
          <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>

          <h2
            lang="en"
            className="gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
          >
            ReactJs & Next.js
          </h2>
          <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
            ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و یکه‌تاز دنیای
            وب! پیشرفته‌ترین مباحث رو اینجا می تونی پیدا کنی. پس همین الان
            یادگیری رو شروع کن ما هم از ابتدای مسیر با آموزش‌های تخصصی و کاملاً
            کاربردی کنارت هستیم.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
            <Button
              variant="primary"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              <IconArrowLeftFill fill="currentColor" />
              دوره‌های ری اکت و نکست‌ جی‌اس
            </Button>
            <Button
              variant="neutral"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              مقالات ری اکت و نکست‌ جی‌اس
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="flex flex-col-reverse xl:flex-row gap-4 justify-center xl:justify-between items-center">
          <Button
            variant="neutral"
            className="font-semibold"
            animatedIcon={true}
          >
            <IconArrowLeftFill fill="currentColor" />
            همه مقاله‌ها
          </Button>
          <div className="text-center xl:text-end">
            <h2 className="text-2xl font-extrabold">
              تازه‌ترین مقاله‌های آموزشی
            </h2>
            <p className="mt-3 text-lg">
              به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در اختیارت
              می‌ذاریم؛ چون پیشرفتت برامون مهمه!
            </p>
          </div>
        </div>
        <BlogPostCardList posts={newestBlogPost} />
      </section>
      <div className="relative mt-32">
        <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl"></div>
        <h2 className="text-info relative z-0 mx-auto text-3xl font-extrabold block w-fit">
          <span className="-z-10 w-8 h-8 absolute bg-info opacity-25 -top-2 rounded-full inline-block -right-3"></span>
          تجربه هم‌میسرهای کلاسبن
        </h2>
        <p className=" mb-32 text-lg text-center mt-2">
          تو اینجا تنها نیستی. ببین هم‌مسیرهات نظرشون در مورد دوره‌های کلاسبن
          چیه
        </p>
        <Testimonial testimonials={testimonials} />
      </div>
    </>
  );
}
