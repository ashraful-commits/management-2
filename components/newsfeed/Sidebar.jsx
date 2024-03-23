import React from "react";
import MainMenu from "./MainMenu";
import Image from "next/image";

export default function Sidebar(props) {
  return (
    <div className="h-full bg-lightblue relative min-w-[250px] top-20">
      <div className="flex justify-center flex-col items-center pt-10">
        <Image width={100} height={100} src="/user.png" alt="" />
        <h2 className="text-xl text-white mt-4 !font-poppins">Player Name</h2>
        <div className="flex justify-center items-center mt-1">
          <Image width={40} height={40} src="/coin.svg" alt="" />
          <span className="text-white font-semibold ml-2">50</span>
        </div>
      </div>
      <MainMenu />
    </div>
  );
}
