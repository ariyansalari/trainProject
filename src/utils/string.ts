export const generateID=():string=>{
    return Math.random().toString(36).substring(2,9)+''+new Date().getTime()
}
export const padWithZero=<T extends number|string ,U extends number>(number:T,width:U,):string=>{
return number.toString().padStart(width,'0')
}