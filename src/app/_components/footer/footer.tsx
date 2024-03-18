import Image from "next/image";
import Link from "next/link";
import { Avatar } from "..";
export const Footer: React.FC = async () => {
  return (
    <div className="bg-base-100 text-base-content">
      <footer className="container flex flex-col  lg:flex-row items-center gap-5 px-0  lg:px-12 xl:px-40 py-20">
        <div className="text-center flex flex-col items-center lg:me-20">
          <Image
            src="/images/logo-en-light.svg"
            width={180}
            height={36}
            alt="کلاسبن"
          />

          <p className="opacity-50 mt-2">
            پلتفرم آموزش برنامه‌نویسی
            <br /> یادگیری مداوم - پیشرفت مستمر
          </p>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-5 md:gap-6 whitespace-nowrap">
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/install/" className="link link-hover">
              آموزش ری‌اکت و نکست
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              سنیور ری‌اکت
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              مشاوره برنامه‌نویسی
            </Link>
          </div>

          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              کلاسبن در لینکدین
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              کلاسبن در تلگرام
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              کلاسبن در یوتیوب
            </Link>
          </div>
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              مطالب و مقالات
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              پرسش های متداول
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              شرایط استفاده و حریم خصوصی
            </Link>
          </div>
        </div>
      </footer>

      <div className="bg-base-200 text-left" lang="en" dir="ltr">
        <div className="container py-10 flex justify-between items-center">
          <div className="flex gap-5 items-center ">
            <Avatar src="/images/trafficLightAriyan.jpg" variant="warning"/>
            <div className="flex flex-col">
              <span className="text-base-content/50 ">Developed by:</span>
              <span className="text-lg font-bold tracking-wide">
                ariyan salari
              </span>
            </div>
          </div>
          <span className="text-sm text-base-content/60 font-semibold">
            Copyright &copy; 2023
            <p>All rights reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
};
