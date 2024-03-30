import { ComponentBase, Variant } from "..";

export type TimeRef={
    start:()=>void;
    pause:()=>void;
    restart:(expiryTimestamp:Date)=>void;
    resume:()=>void;
}
type TimerWithProps =Omit<ComponentBase,'variant'|'isDisabled'>
export type TimerProps=TimerWithProps &{
    variant?:Variant|'gradiant';
    showTitle?:boolean;
    autoStart?:boolean;
    expiryTimestamp:Date;
    showDays?:boolean;
    showHours?:boolean;
    onExpire?:()=>void;
}

export type TimerProgressProps =TimerWithProps& {
    variant?:Variant|'gradiant';
value:number;
maxValue:number;
datePart:string;
showTitle?:boolean;
children:React.ReactNode;
}