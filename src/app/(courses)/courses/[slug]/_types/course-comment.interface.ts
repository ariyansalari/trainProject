export interface CourseCommnet {
    id:number;
    date:string;
    userId:number|undefined ;
    fullName :string;
    commentText:string;
    score:number | null ;
    isResponse :boolean;
}

export interface CourseCommnetList {
    data:CourseCommnet[];
    nextPage:number;
}