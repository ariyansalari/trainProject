import { authConfig } from './auth.config';
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { createData } from './core/http-service/http-service';
import { User } from './types/user.inrerface';
import { API_URL } from './configs';

declare module 'next-auth'{
    interface User{
        accessToken:string
    }
}
const {
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
     password:credentials.code as string
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
    ]
})