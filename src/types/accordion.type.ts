import { ReactNode } from "react";

export type Accordion ={
    id:number;
    title:string;
    content : string |ReactNode
}