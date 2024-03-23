import React from "react";
import Image from "next/image";
import playnow from "@/public/playnow.png";
import player from "@/public/NATALIA SWING 2.png";
const CallToAction = () => {
  return <><div className="relative z-0 w-full my-32 min-h-[423px]">
  <Image
    className="absolute top-0 left-0 z-10 w-full h-full"
    alt="playnow"
    src={playnow}
  />
  <div className="absolute top-0 z-20 grid w-full h-full grid-cols-2 ">
    <div className="flex flex-col items-start justify-center px-14">
      <h4 className="font-[400] text-[38px] text-left leading-[45px] text-[#F20093] font-russo_one">
        BECOME A SMASH <br/> GOLF CHAMPION
      </h4>
      <p className="font-[400] py-5 tracking-[0.7px] font-Saira text-[22px] text-[#13131A]">
        SIGN UP TO PLAY TODAY
      </p>
      <button className="border hover:bg-[#F20093] hover:text-white transition-all duration-500 ease-in-out rounded-sm w-[161px] h-[52px] text-[#13131A] text-[22px] capitalize border-[#F20093] font-Saira font-[400px]">
        play now
      </button>
    </div>
    <div className="relative flex items-center justify-end w-full h-full">
      <Image
        className="absolute bottom-0 mb-auto right-14"
        alt="player"
        src={player}
      />
    </div>
  </div>
</div></>;
};

export default CallToAction;
