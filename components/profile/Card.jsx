import React from "react";
import Image from "next/image"
import cardBg from "@/public/cardBgProfile.png"
import polygon from "@/public/polygon.png"

const Card = (props) => {
  const icon = props.icon
  const level = props.level
  const count = props.count
  return <div className="min-w-[232px] min-h-[144px] ">
   <div 
   className={"w-[76px] h-[76px] relative top-5 left-20 rounded-md overflow-hidden flex justify-center items-center  "}>
      <Image className="absolute z-0 w-full h-full" alt="bg" src={polygon} />
      <Image className="relative z-10 w-[46px] h-[46px] " alt="icon" src={icon} />
    </div>
    <div className="w-[232px] h-[98px] relative flex justify-center items-center flex-col ">
      <Image className="absolute z-[-1] w-full h-full" alt="bg" src={cardBg} />
      <span className="font-[600] text-[32px] mt-2 text-white">{count}</span>
      <p className="font-[500] text-[14px] text-[#C1C1C1]">{level}</p>
    </div>
  </div>;
};

export default Card;
