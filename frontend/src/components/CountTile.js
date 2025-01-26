import React from 'react'




function CountTile({title,count,icon : Icon}) {
  return (
    <div className="h-[130px] w-[250px] bg-[#31363F] rounded-[10px] flex flex-row justify-center">
        <div className="w-[40%] flex flex-col justify-center items-center text-[#EEEEEE]">
         <Icon size={"35px"}/>
        </div>
        <div className="w-[60%] flex flex-col items-start justify-center">
          <span className="text-[#EEEEEE] font-bold text-[50px]">{count}</span>
          <span className="text-[#EEEEEE] font-thin text-[15px] pb-3">{title}</span>
        </div>
      </div>
  )
}

export default CountTile