"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import welcomeBg from "../../public/welcomeBg.png";
import cirleImg from "../../public/image-circle.png";
import profile from "../../public/profileDefault.png";
import { X, Camera, User } from "lucide-react";
const ProfileModel = ({ setShow, setPopup }) => {
  return (
    <div className="fixed  top-0 left-0 flex items-center justify-center min-h-screen bg-gray-300 bg-opacity-10 z-[99999] backdrop-blur-sm w-screen">
      <div className="w-[430px] h-[580px] relative font-russo_one flex flex-col items-center p-8 rounded-lg  text-white shadow-lg ">
        <div className="absolute top-0 left-0 w-full h-full min-w-full min-h-full">
          <Image className="left-0 z-0 w-full h-full " src={welcomeBg} />
        </div>
        {/* <Button
          onClick={() => setShow(false)}
          className="absolute ml-auto text-gray-600 bg-transparent top-2 right-2 hover:bg-transparent hover:text-gray-300"
        >
          <X size="20" />
        </Button> */}
        <h2 className="mb-8 mt-2 text-[25px] font-[400] z-10 leading-[28px] text-center text-capitalize font-russo_one w-[100%] text-white capitalize">
          Tell Us a Little About <span className="text-white">Yourself</span>{" "}
        </h2>

        <div className="z-10 flex flex-col items-center w-full my-2 gap-y-2">
          <div className="w-[120px] z-20 h-[120px] relative rounded-full border">
            <div className="relative w-full h-full overflow-hidden rounded-full">
              <Image
                className="z-30 w-full h-full mb-2 rounded-full"
                src={cirleImg}
              />
              <Image
                src={profile}
                className="absolute w-[94px] h-[100px] bottom-0 left-3 z-40 "
              />
            </div>
            <Label
              for="profileImg"
              className="w-[34px] border cursor-pointer h-[30px] overflow-hidden flex justify-center items-center z-50  absolute right-0 top-[80px] rounded-md"
            >
              <Image
                className="absolute object-cover w-full h-full z-60"
                src={welcomeBg}
                alt="bg"
              />
              <Camera size="15" className="relative z-70" />
            </Label>
          </div>
          <Input type="file" id="profileImg" className="hidden" />
          <p
            className="inline-block font-normal text-gray-300 capitalize "
            className="text-gray-300 font-Saira font-[400]  text-[14px] mt-2 mb-4 leading-[12px] capitalize"
          >
            Add Profile Picture
          </p>
        </div>
        <div className="w-[80%]  z-10 flex flex-col gap-y-6 mb-3">
          <div className="w-full">
            <Label className="inline-block mb-2 text-center font-Saira font-[500] text-[14px] leading-[12px] text-gray-300">
              User Name
            </Label>
            <Input
              className="w-full text-[#A0AEC0] bg-transparent text border border-gray-400 rounded-sm focus:outline-red-500 focus:outline-none focus:border-blue-500 placeholder:font-Inter focus-within:outline-blue-500"
              placeholder="John Duo"
            />
          </div>
          <div className="w-full">
            <Label className="inline-block mb-2 font-Saira font-[400] text-[14px] leading-[12px] text-center text-gray-300">
              Profile Bio
            </Label>
            <Input
              className="w-full text-[#A0AEC0] placeholder:font-Inter bg-transparent border border-gray-400 rounded-sm outline-nones focus:outline-none focus:border-blue-500 focus:outline-blue-500"
              placeholder="Professional Golf Player Love to Read"
            />
          </div>
        </div>

        <div className="relative z-10 flex justify-end w-full mt-5 gap-x-2">
          <Button
            onClick={() => setPopup(1)}
            className="text-white transition-all duration-500 ease-in-out bg-transparent border-none font-Saira font-[500] text-[16px] hover:bg-gray-700 hover:text-white "
            size="lg"
            variant="outline"
          >
            Back
          </Button>
          <Button
            onClick={() => {
              setShow(false), localStorage.setItem("hasLoggedIn", false);
            }}
            className=" bg-blue2 font-Saira font-[500] text-[16px]"
            size="lg"
            variant="default"
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
