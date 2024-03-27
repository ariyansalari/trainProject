import Image from "next/image";

 const AuthTemplate =({children}:{children:React.ReactNode})=>{
return (
    <div dir="rtl" className="fade-in container pl-0 flex max-w-6xl dark:bg-base-50 mt-16 rounded-lg border dark:border-base-content dark:border-opacity-10 shadow-md dark:bg-opacity-20">
    <section className="flex-1 p-10  flex flex-col">{children}</section>
    <section className="flex-1 p-10">
        <div className="dark:bg-primary-focus rounded-lg shadow-lg dark:text-white flex flex-col items-center justify-around text-center p-6">
            <h5 className="text-xl">
                کلاسبن؛ آموزش متفاوت برنامه نویسی
            </h5>
            <div className="dark:bg-primary dark:bg-opacity-50 p-2 rounded-full w-80 h-80 my-8 flex justify-center items-center">
                <div className="dark:bg-primary dark:bg-opacity-90 p-2 rounded-full w-72 h-72 my-6 flex justify-center dark:border-white border dark:border-opacity-10 relative">
                    <Image
                        priority
                        fill
                        src="/images/programmer.svg"
                        alt="آموزش فرانت اند، آموزش React، آموزش ری اکت، دوره های آموزشی ری اکت"
                    />
                </div>
            </div>
            <div>
                <h4 className="text-xl">
                    یادگیری برنامه نویسی در کوتاه ترین زمان
                </h4>
                <h6 className="mt-3">
                    اینجا سریع سر اصل مطلب می رویم!
                </h6>
            </div>
        </div>
    </section>
</div>
)
}
export default AuthTemplate