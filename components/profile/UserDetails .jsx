import React from "react";
import Image from "next/image";
const UserDetails = (props) => {
  const icon = props.icon;
  const level = props.level;
  const count = props.count;

  return (
    <div className="flex items-center gap-x-5">
      <Image className="w-[36px] h-[36px]" src={icon} alt="icon" />
      <div className="flex flex-col">
        <span className="inline-block font-[500] text-[14px] leading-[21px] text-[#c1c1c1] ">
          {level}
        </span>
        <span className="inline-block font-[600] text-[22px] leading-[33px] text-[#fffff] ">
          {count}
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
