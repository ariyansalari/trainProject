import { CourseLevel } from "@/enums";

export interface CourseDetails {
    title: string;
    basePrice?: number;
    numberOfLectures: number;
    level: string;
    numOfStudents: number;
    duration: string;
    isDownloadable: boolean;
    numOfReviews: number;
    isFree: boolean;
    subTitle: string;
    averageReviewRating: number;
    profileImageId?: number;
    authorName: string;
    recordStatus: string;
    authorSpecialty?: string;
    videoUrl?: string;
    coverImageId: number;
    description: string;
    frequentlyAskedQuestions: CourseDetailsFAQ[];
    levelNumber: CourseLevel;
}

interface CourseDetailsFAQ {
    id: number;
    question: string;
    answer: string;
  }