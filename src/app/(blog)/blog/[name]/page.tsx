import React from 'react'

const BlogsName = ({params}:{params:{name:string}}) => {
    const {name}=params;
  return (
    <div className="font-bold text-3xl w-full flex justify-center items-center ">{name}</div>
  )
}

export default BlogsName