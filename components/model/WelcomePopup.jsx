"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import welcomeBg from "../../public/welcomeBg.png";
import { X } from "lucide-react";
import Image from "next/image";
const WelcomePopup = ({ setShow, setPopup }) => {
  const [checkboxes, setCheckboxes] = useState("5");
  console.log(checkboxes);
  const handleChange = (event) => {
    setCheckboxes(event.target.value);
  };
  return (
    <div className="fixed  top-0 left-0 flex items-center justify-center min-h-screen bg-gray-300 bg-opacity-10 z-[99999] backdrop-blur-sm w-screen">
      <div className="w-[430px] z-0 h-[580px] relative font-russo_one flex flex-col items-center p-8 rounded-3xl  text-white shadow-lg overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full min-w-full min-h-full">
          <Image className="left-0 z-0 w-full h-full " src={welcomeBg} />
        </div>
        {/* <Button
          onClick={() => setShow(false)}
          className="absolute ml-auto text-gray-500 bg-transparent top-3 right-3 hover:bg-transparent hover:text-white"
        >
          <X size="20" />
        </Button> */}
        <h2 className="mt-5 text-[25px] z-10 leading-[28px]  font-[400] text-center text-capitalize font-russo_one w-[90%] capitalize">
          Welcome to the <span className="text-pink-500">Inrange</span> Smash
          Golf Tour
        </h2>
        <p className="mt-5 font-Saira z-10 text-center text-[14px] font-normal  leading-[20px] text-gray-200">
          Inrange Smash Golf tour(ISGT) if for the new golfer, double digit
          handicap or scratch golfer looking to test their skills, have fun, win
          prizes from golfs best brands or even become a ISGT World Champion.
        </p>
        <Label className="z-10 font-Saira inline-block font-[500] text-[14px] leading-[12px] text-gray-400 mt-7 text-center">
          Please Enter Your Average 9-Hole Score
        </Label>
        <Input
          className="w-[289px] mt-5 z-10 rounded-sm  text-[12px] font-[400] border-[#718096] border focus:border-none bg-transparent text-gray-200 focus:outline-none"
          placeholder="10.00"
        />
        <h5 className="z-10 my-8 !font-Saira font-[500] text-[14px] leading-[12px] text-gray-400 ">
          Don't Know Your Score
        </h5>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div class="relative z-10 group ">
            <Label
              className={`border rounded-full w-[92px] h-[27px] font-Saira  font-[500] leading-[12px] text-[8px] flex justify-start px-2 items-center gap-x-1  border-none ${
                checkboxes == 1
                  ? "bg-blue-500 bg-opacity-30 border border-blue-500"
                  : " bg-[#718096]"
              }`}
            >
              <input
                type="radio"
                checked={checkboxes == 1}
                name="lebel"
                onChange={handleChange}
                value="1"
                id="beginnerCheckbox"
                className={`${checkboxes == 1 ? "accent-blue-500" : ""} `}
              />
              Beginner
            </Label>
          </div>

          <div class="relative z-10 group ">
            <Label
              className={`border rounded-full w-[92px] h-[27px] font-Saira  font-[500] leading-[12px] text-[8px] flex justify-start px-2 items-center gap-x-1 ${
                checkboxes == 2
                  ? "bg-blue-500 bg-opacity-30 border border-blue-500"
                  : " bg-[#718096]"
              } border-none`}
            >
              <input
                type="radio"
                checked={checkboxes == 2}
                name="lebel"
                onChange={handleChange}
                value="2"
                id="belowAverageCheckbox"
                className={`${checkboxes == 2 ? "accent-blue-500" : ""} `}
              />
              Below Average
            </Label>
          </div>

          <div class="relative z-10 group">
            <Label
              className={`border rounded-full w-[92px] h-[27px] font-Saira  font-[500] leading-[12px] text-[8px] flex justify-start px-2 items-center gap-x-1 ${
                checkboxes == 3
                  ? "bg-blue-500 bg-opacity-30 border border-blue-500"
                  : " bg-[#718096]"
              } border-none `}
            >
              <input
                type="radio"
                checked={checkboxes == 3}
                name="lebel"
                onChange={handleChange}
                value="3"
                id="averageCheckbox"
                className={`${checkboxes == 3 ? "accent-blue-500" : ""} `}
              />
              Average
            </Label>
            <span class="font-bold z-0 group-hover:flex  w-[35px] h-[20px] absolute -top-7 hidden bg-blue-500  text-[7px] rounded-sm left-[25%]  justify-center items-center">
              <div
                className="absolute"
                style={{ clipPath: "polygon(54% 59%, 0 0, 100% 0)" }}
                className="absolute z-20 w-5 h-5 bg-blue-500 left-[25%] top-4 "
              ></div>
              <span className="z-30"> 2.0-4.0</span>
            </span>
          </div>

          <div class="relative z-10 group">
            <Label
              className={`border rounded-full w-[92px] h-[27px] font-Saira  font-[500] leading-[12px] text-[8px] flex justify-start px-2 items-center gap-x-1  ${
                checkboxes == 4
                  ? "bg-blue-500 bg-opacity-30 border border-blue-500"
                  : " bg-[#718096]"
              } border-none`}
            >
              <input
                type="radio"
                checked={checkboxes == 4}
                name="lebel"
                onChange={handleChange}
                value="4"
                id="intermediateCheckbox"
                className={`${
                  checkboxes == 4 ? "accent-blue-500" : ""
                } bg-blue-900`}
              />
              Intermediate
            </Label>
          </div>

          <div class="relative z-10 group">
            <Label
              className={`border ${
                checkboxes == 5
                  ? "bg-blue-500 bg-opacity-30 border border-blue-500"
                  : " bg-[#718096]"
              }  rounded-full w-[92px] h-[27px] text-[8px]  text-white flex justify-start px-3 items-center gap-x-2   border-none`}
            >
              <input
                type="radio"
                checked={checkboxes == 5}
                name="lebel"
                onChange={handleChange}
                value="5"
                id="expertCheckbox"
                className={`${checkboxes == 5 ? "accent-blue-500" : ""} `}
              />
              Expert
            </Label>
            <span class="font-bold z-0 group-hover:flex  w-[35px] h-[20px] absolute -top-7 bg-blue-500  text-[7px] rounded-sm left-[25%]  justify-center hidden items-center">
              <div
                className="absolute"
                style={{ clipPath: "polygon(54% 59%, 0 0, 100% 0)" }}
                className="absolute z-20 w-5 h-5 bg-blue-500 left-[25%] top-4 "
              ></div>
              <span className="z-30"> 2.0-4.0</span>
            </span>
          </div>
        </div>

        <div className="relative z-10 flex justify-end w-full mt-12 group gap-x-2">
          <Button
            onClick={() => setShow(1)}
            className="text-white transition-all font-Saira font-[400] leading-[22px] duration-500 ease-in-out text-[16px] bg-transparent border-none hover:bg-gray-700 hover:text-white "
            size="lg"
            variant="outline"
          >
            Back
          </Button>
          <Button
            onClick={() => setPopup(2)}
            className=" bg-blue2 font-Saira font-[400] text-[16px] leading-[22px]"
            size="lg"
            variant="default"
          >
            {" "}
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
