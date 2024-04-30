export interface User{
    token:string;
}

export interface UserToken {
    mobile?:string;
    picture?:number;
    fullName?:string;
    exp:number;
    accessToken:string;
}
export interface UserSession extends UserToken{}