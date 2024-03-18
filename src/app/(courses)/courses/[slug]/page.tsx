import { API_URL } from '@/configs'
import { CourseDetails } from '@/types'
import React from 'react'
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
    
    const courseData=await getCourse(slug)

  return (
    <div>{courseData.title}</div>
  )
}

export default CoursesPageDetails