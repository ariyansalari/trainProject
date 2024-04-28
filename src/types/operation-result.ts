import { Problem } from ".";

export type OperationResult<T>={
    isSuccess:boolean;
    error?:Problem;
    response?:T;
}