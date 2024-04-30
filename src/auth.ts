import { authConfig } from './auth.config';
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { createData } from './core/http-service/http-service';
import { User, UserSession, UserToken } from './types/user.inrerface';
import { API_URL } from './configs';
import { VerifyUserModel } from './types';
import {jwtDecode} from "jwt-decode"
import {JWT} from 'next-auth/jwt'
declare module 'next-auth'{
    interface User{
        accessToken:string
    }
    interface Session {
        user:UserSession
    }
}
declare module 'next-auth/jwt'{
    interface JWT{
     user:UserToken;
     role?:string[]
    }
}
export const {
    signIn,
    signOut,
    handlers:{
        GET,
        POST
    },
    auth
}=NextAuth({
    ...authConfig,
    providers:[
        CredentialsProvider({
            name:"crendetials",
            credentials:{
                username:{label:"username",type:"text"},
                code :{label:"code",type:"text "}
            },
            async authorize(credentials){
                try{
const user=await createData<VerifyUserModel,User>(`${API_URL}/verify`,{
     username:credentials.username as string,
     code:credentials.code as string
})

return {
    accessToken:user.token
}
                }
                catch(error:unknown){
throw new Error('')
                }
            }
        })
    ],
    callbacks:{
        async jwt({user,token}){
if(user){
 token.user=jwtDecode<UserToken>(user.accessToken)
token.user.accessToken=user.accessToken 

}
return token
        },
        async session ({session,token}){
Object.assign(session.user,token.user??{})
return session
        }
    }
})