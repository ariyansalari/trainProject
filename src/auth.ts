import { authConfig } from './auth.config';
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { createData } from './core/http-service/http-service';
import { User } from './types/user.inrerface';
import { API_URL } from './configs';
import { VerifyUserModel } from './types';

declare module 'next-auth'{
    interface User{
        accessToken:string
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
console.log(user.token);

return {
    accessToken:user.token
}
                }
                catch(error:unknown){
throw new Error('ajb')
                }
            }
        })
    ]
})