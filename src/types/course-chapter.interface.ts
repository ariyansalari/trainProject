import { CourseLecture } from "./course-lecture.interface";

export interface CourseChapter {
    id:number;
    title:string;
    numOfLectures:number;
    duration:string;
    lectures:CourseLecture[]
}