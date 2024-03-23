import React from "react";
import Image from "next/image";
import profilebg from "@/public/profilebg.png";
import data from "@/public/data/eventsLeaderboard.json";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
}from "@/components/ui/tabs";



const Settings = () => {
  return (
    <div className="w-full px-10 ">
      <Image
        className="absolute top-0 left-0 z-10 w-full"
        src={profilebg}
        alt="profile"
      />
      <h4
        className={"relative px-5 pt-10 z-20 mb-10 text-xl font-semibold font-Saira"}
      >
        Settings
      </h4>
      <div className="relative z-20 w-full min-h-[827px] bg-[#1C1C24BF] bg-opacity-75 rounded-2xl">
      <h4
        className={"relative uppercase px-5 pt-10 z-20 mb-10 text-lg font-semibold font-Saira"}
      >
        Player Info
      </h4>

      <div className="grid grid-cols-2 gap-5 p-5"> 
        <div className="border-b">
          <Label className="text-[14px] text-[#8083A3] capitalize">HCAP</Label>
          <Input className="text-white mt-2 bg-transparent text-[16px] placeholder:text-white border-gray-900  font-[600] border-none focus:outline-none focus:border-none border-none outline-none" placeholder="17.57"/>
        </div>
        <div className="border-b">
          <Label className="text-[14px] text-[#8083A3] capitalize">Home Course</Label>
          <Input className="text-white mt-2 bg-transparent text-[16px] placeholder:text-white border-gray-900  font-[600] border-none focus:outline-none focus:border-none border-none outline-none" placeholder="Dobson Ranch Golf Course"/>
        </div>
        <div className="border-b">
          <Label className="text-[14px] text-[#8083A3] capitalize">Inrange ID</Label>
          <Input className="text-white mt-2 bg-transparent text-[16px] placeholder:text-white border-gray-900  font-[600] border-none focus:outline-none focus:border-none border-none outline-none" placeholder="0123"/>
        </div>
        <div className="border-b">
          <Label className="text-[14px] text-[#8083A3] capitalize">Swings</Label>
          <Input className="text-white mt-2 bg-transparent text-[16px] placeholder:text-white border-gray-900  font-[600] border-none focus:outline-none focus:border-none border-none outline-none" placeholder="123"/>
        </div>
        
        <div className="border-b">
          <Label className="text-[14px] text-[#8083A3] capitalize">Bio</Label>
          <Input className="text-white mt-2 bg-transparent text-[16px] placeholder:text-white border-gray-900  font-[600] border-none focus:outline-none focus:border-none border-none outline-none" placeholder="17.57"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Settings;
