import React from 'react'
import { RiLoader3Fill } from "react-icons/ri";


function Loading() {
  return (
    <div className='  w-[calc(100vw-250px)] h-[calc(100vh-60px)] mt-[60px] py-[20px] flex flex-col items-center '><RiLoader3Fill className="animate-spin" size={"60px"}/></div>
  )
}

export default Loading