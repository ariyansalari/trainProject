import React from 'react'
import { VerificationForm } from './_components'

const page =async ({searchParams}:{searchParams:{[key:string]:string|string[]|undefined}}) => {
  return (
   <VerificationForm mobile={searchParams['mobile'] as string}/>
  )
}

export default page