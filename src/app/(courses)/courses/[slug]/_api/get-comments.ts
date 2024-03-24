import { readData } from "@/core/http-service/http-service";
import { CourseCommnetList } from "..";
import { useQuery } from "react-query";

type GetCommentsOptions ={
    params:{
        slug:string;
        page:number;
    }
}

const getComments =({params}:GetCommentsOptions):Promise<CourseCommnetList>=>{
const {page,slug}=params
const url =`/courses/${slug}/comments?page=${page}`
return readData(url)
}
export const useCourseComments =({params}:GetCommentsOptions)=>{
   const {data,isLoading}= useQuery({
        queryKey:['courseComments'],
        queryFn:()=>getComments({params})
    })
    return {
        data,
        isLoading
    }
}