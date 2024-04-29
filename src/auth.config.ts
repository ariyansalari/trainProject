import { NextAuthConfig } from "next-auth";

export const authConfig={
    pages:{
        signIn:"/sign-in"
    },
    callbacks:{},
    providers:[]

}satisfies NextAuthConfig