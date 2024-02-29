import React, { ReactNode } from 'react'

const layoutStudent = async({children}:{children:ReactNode}) => {
  return (
    <div className='flex items-center bg-slate-500  flex-1'>
    <div className='flex-1'>
        {children}
    </div>
    <div className='bg-slate-950 text-white p-8 h-full items-center flex font-bold'>nested layout</div>

    </div>
  )
}

export default layoutStudent