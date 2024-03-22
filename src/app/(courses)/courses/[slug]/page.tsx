import { ProgressBar, Rating, Tab, TabBar } from '@/app'
import { API_URL } from '@/configs'
import { CourseDetails } from '@/types'
import React from 'react'
import { CourseAside } from './_components'
export async function generateStaticParams() {
  const slugs=await fetch(`${API_URL}/courses/slugs`).then((res)=>res.json())
  return (slugs as string[]).map((slug)=>({
    slug:slug
  }))
}
async function getCourse(slug:string):Promise<CourseDetails> {
  const res=await fetch(`${API_URL}/courses/${slug}`)
  return res.json()
}
const  CoursesPageDetails=async ({params}:{params:{slug:string}}) => {
    const {slug}=params
    
    const course=await getCourse(slug)
const tabs:Tab[]=[{
  label:"مشخصات دوره",
  content:course.description
},{
  label:"دیدگاه ها و پرسش ها",
  content:"course comment"
},{
  label:"سوالات متداول",
  content:"accordion comments"
}]
  return (
    <div dir='rtl' className=' container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10 '>
              <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl"></div>



<div className='col-span-10 xl:col-span-7  '>
<h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
                    {course.title}
                </h1>
                <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
                    {course.subTitle}
                </h2>

                <div className=" mt-5">Video Player Component</div>
</div>
<div className='col-span-10 xl:col-span-3  '>
<CourseAside/>
</div>
<div className='col-span-10 xl:col-span-6 '>
  <TabBar tabs={tabs} />
</div>
<div className='col-span-10 xl:col-span-4 bg-warning '></div>





    </div>
  )
}

export default CoursesPageDetails