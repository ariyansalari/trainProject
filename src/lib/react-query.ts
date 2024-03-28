import { showNotification } from "@/store";
import { Notification, Problem } from "@/types";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { error } from "console";

export const queryClient =new QueryClient({
    queryCache :new QueryCache({
onError:(error)=>{
    //show notification 
}
    }),
    mutationCache :new MutationCache ({
        onError:(error:unknown)=>{
showNotification(error as Problem)
        }
    }),
    defaultOptions:{
        queries:{
            retry:false,
            refetchOnWindowFocus:false,
            throwOnError:false,
            gcTime:1000*60*60*24,
            
        }
    }
})
const showNotifications=(problem:Problem)=>{
const notifications:Omit<Notification,'id'>[]=[]
if(problem?.errors){
Object.entries(problem.errors).forEach(([_,value])=>value.forEach(errorMessage=>notifications.push({
    message:errorMessage,
    type:"error"
})))
}else if (problem?.detail){
    notifications.push({
        message:problem.detail,
        type:"error"
    })
}
}