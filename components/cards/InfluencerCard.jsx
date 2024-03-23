import React from "react";
import { Trophy, Clock3 } from "lucide-react";
import Image from "next/image";

import cashIcon from "../../public/Smash Cash.png";

export default function InfluencerCard(props) {
  const index = props.index;
  const award = props.award;
  const avatar = props.avatar;
  const name = props.name;
  const net = props.net;
  const Handicap = props.Handicap;
  const cash = props.cash;

  return (
    <div
      style={{
        backgroundImage: `${
          index === 2
            ? "linear-gradient(to bottom, #7ED5F1, transparent)"
            : index === 3
            ? "linear-gradient(to bottom, #C0C0C0, transparent)"
            : index === 1
            ? "linear-gradient(to bottom, #1183ED, transparent)"
            : "none"
        }`,
        padding: "2px",
      }}
      className={`h-full flex  justify-center items-center  max-sm:w-full rounded-2xl rounded-br-none rounded-bl-none  ${
        index == 2
          ? " max-w-[300px] min-w-[450px] max-sm:min-w-[300px] min-h-[268px] "
          : "min-h-[195px] min-w-[300px] max-sm:w-full "
      }`}
    >
      <div
        className={` z-0  flex-col w-full relative ${
          index === 2 &&
          "min-h-[268px] bg-gradient-to-b to-[#0082B500] from-[#0082B5]"
        } ${
          index === 3 &&
          "min-h-[195px] bg-gradient-to-b from-[#FFA500] to-[#B15500A6]"
        }  ${
          index === 1 &&
          "min-h-[195px] bg-gradient-to-b to-[#004D5EA6] from-[#00FFD1]"
        } rounded-bl-none rounded-br-none rounded-2xl  flex justify-center items-center  `}
      >
        <Image
          alt="award"
          style={{ top: `${index == 2 ? "-30px" : "-15px"}` }}
          src={award}
          className={`absolute z-30 ${
            index == 2 ? "w-[37px] h-[55px]" : "56px h-[27px]"
          }`}
        />
        <div
          style={{
            width: `${index == 2 ? "65px" : "50px"}`,
            height: `${index === 2 ? "65px" : "50px"}`,
          }}
          className={` bg-gradient-to-b form-[#F20093] ${
            index == 2 &&
            "bg-gradient-to-b form-[#F20093] to-[#0085FFCC] p-[2px]"
          } rounded-full to-[#0085FFCC] flex justify-center items-center h-[32px]   overflow-hidden mt-5`}
        >
          <Image
            src={avatar}
            className={" w-full h-full rounded-[15px] p1 "}
            alt="avatar"
          />
        </div>
        <h5
          className={
            "font-[400] font-russo_one  pl-5 mt-3 text-[24px] text-center text-white leading-[28px]"
          }
        >
          {name}
        </h5>
        <div
          className={`gap-x-4 pb-0 flex items-center  justify-center w-full h-full mt-5 `}
        >
          <div
            style={{
              backgroundColor: "#1A202C",
            }}
            className={` gap-y-1 flex flex-col justify-center items-center py-1 px-5  shadow-lg  border-gray-800  ${
              index === 2
                ? "rounded-md p-4 w-[92px] h-[50px] "
                : " rounded-md w-[70px] h-[37px] "
            } `}
          >
            <span
              className={`inline-block font-Saira text-[#718096] font-[500]   text-center  ${
                index === 2 ? "text-[10.48px]" : "text-[6px]"
              }`}
            >
              Net Score
            </span>
            <span
              className={`inline-block text-white font-[400]  text-[13px] leading-[17px] text-center ${
                index == 2 && "text-[16px]"
              }`}
            >
              {net}
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#1A202C",
            }}
            className={` gap-y-1 flex flex-col justify-center items-center py-1 px-5  shadow-lg  border border-gray-800 ${
              index === 2
                ? "rounded-md  w-[92px] h-[50px] p-4"
                : " w-[70px] h-[37px] rounded-md "
            } `}
          >
            <span
              className={`inline-block font-Saira text-[#718096] font-[500] leading-[11px] text-center ${
                index === 2 ? "text-[11px]" : "text-[7px]"
              }`}
            >
              Handicap
            </span>
            <span
              className={`inline-block text-white font-[400]  text-[13px] leading-[17px] text-center ${
                index == 2 && "text-[16px]"
              }`}
            >
              {Handicap}
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#1A202C",
            }}
            className={` gap-y-1 flex flex-col justify-center items-center py-1 px-5  shadow-lg font-Saira  border border-gray-800  ${
              index === 2
                ? "rounded-md p-4  w-[119px] h-[50px]"
                : " w-[88px] h-[37px] rounded-md "
            } `}
          >
            <span
              className={`inline-block  text-[#718096] font-[500] leading-[11px] text-center ${
                index === 2 ? "text-[11px]" : "text-[7px]"
              }`}
            >
              Smash Cash
            </span>
            <div className="flex items-center justify-center w-full overflow-hidden gap-x-1 ">
              <Image src={cashIcon} className="w-[14px] h-[14px]" alt="cash" />
              <span
                className={`inline-block text-white font-[500] font-russo_one  text-[11px] leading-[17px] text-center ${
                  index == 2 ? "text-[12px]" : "text-[9px]"
                }`}
              >
                {cash}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
