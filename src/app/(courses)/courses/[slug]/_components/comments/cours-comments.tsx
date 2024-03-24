'use client'
import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api";

export const CourseComments = () => {
  const {slug}=useParams()
  const {data:comments}=useCourseComments(
    {
      params:{
        slug:slug as string,
        page:1
      }
    }
  ) 
  console.log(comments);
  
  return( 
  <>
{comments?.data.map((item)=>(
  <p key={item.id } className="mb-8">{item.commentText}</p>
))}
  </>
  )
};
