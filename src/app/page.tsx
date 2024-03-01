import Image from "next/image";

export default function Home() {
  return (
<>
<section className="bg-hero-pattern bg-no-repeat mt-5 xl:mt-20 xl:bg-left">
  <div className="container flex flex-col-reverse items-center xl:flex-row-reverse">

<div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
  <h3 className="text-xl dark:text-info xl:text-2xl">... خوش اومدی به</h3>
  <h1 className="text-3xl lg:text-3xl xl:text-5xl font-black gradiant">مسیره صعود به قله های برنامه نویسی</h1>
  <p>
    هر جای مسیر برنامه نویسی که باشی، با هم های استاده های با تجربه کلاسی می تونی بدون محدودیت به قله های بالاتر صعودی کنی . ما همیشه هواتو داریم
  </p>
  <Image className="grayscale hover:grayscale-0 transition-all mt-4 opacity-70 m-auto xl:m-0 self-end "  src={"/images/frameworks.png"}  width={412} height={39} alt="frameworks"/>
</div>
<Image src={"/images/programmer-landing.svg"} width={702} height={521} alt="programmer landing" />
</div>

</section>
</>
    );
}
