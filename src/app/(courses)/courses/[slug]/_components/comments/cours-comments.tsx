'use client'
import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api";
import { Comment } from "@/app";

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
{comments?.data.map((comment)=>(
  <Comment key={`comment-${comment.id}`} {...comment} variant="info"/>
))}
  </>
  )
};
