import React from 'react'

const  CoursesPageDetails= ({params}:{params:{id:string}}) => {
    const {id}=params

  return (
    <div>page Courses {id}</div>
  )
}

export default CoursesPageDetails