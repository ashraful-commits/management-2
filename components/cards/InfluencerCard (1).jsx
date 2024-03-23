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
          index === 1 &&
          "min-h-[195px] bg-gradient-to-b to-[#6423A6A6] from-[#9F72FF]"
        }  ${
          index === 3 &&
          "min-h-[195px] bg-gradient-to-b to-[#004444A6] from-[#00A3A3]"
        } rounded-bl-none rounded-br-none rounded-2xl  flex justify-center items-center  `}
      >
        <Image
          alt="award"
          style={{ top: `${index == 2 ? "-30px" : "-15px"}` }}
          src={award}
          className={`absolute z-30 ${
            index == 2 ? "w-[35px] h-[52px]" : "56px h-[27px]"
          }`}
        />
        <div
          style={{
            width: `${index == 2 ? "61px" : "32px"}`,
            height: `${index === 2 ? "61px" : "32px"}`,
          }}
          className={` bg-gradient-to-b form-[#F20093] ${
            index == 2 && ""
          } rounded-full to-[#0085FFCC] flex justify-center items-center h-[32px]   overflow-hidden mt-5`}
        >
          <Image
            src={avatar}
            className={" w-full h-full rounded-[15px] "}
            alt="avatar"
          />
        </div>
        <h5
          className={`font-semibold font-Saira mt-3 text-[18px] text-center text-white leading-[28px] ${
            index === 2 && "text-[22px]"
          }`}
        >
          {name}
        </h5>
        {index !== 2 && (
          <div className="flex items-center justify-center w-full overflow-hidden gap-x-1 ">
            <Image src={cashIcon} className="w-[22px] h-[22px]" alt="cash" />
            <span
              className={`inline-block text-white font-[400] font-russo_one text-[17px] leading-[17px] text-center ${
                index == 2 && "text-[19px]"
              }`}
            >
              500
            </span>
          </div>
        )}
        <div
          className={`${
            index === 2 ? "gap-x-2 " : ""
          } pb-0 flex items-center  justify-center w-full h-full mt-7 `}
        >
          <div
            style={{
              backgroundColor: "#1A202C",
            }}
            className={` gap-y-1 flex flex-col justify-center items-center py-1 px-5  shadow-lg  border-gray-800  ${
              index === 2 ? "rounded-full p-4" : "w-[51px] h-[55px]"
            } `}
          >
            {index === 2 ? (
              <span
                className={`inline-block text-[#718096] font-[500] text-[7px] leading-[11px] text-center  ${
                  index === 2 && "text-[11px]"
                }`}
              >
                Net Score
              </span>
            ) : (
              <span
                className={`inline-block text-[#718096] font-[500] text-[8px] leading-[11px] text-center  ${
                  index === 2 && "text-[10px]"
                }`}
              >
                Net
              </span>
            )}
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
              index === 2 ? "rounded-full  p-4" : "w-[51px] h-[55px]"
            } `}
          >
            <span
              className={`inline-block text-[#718096] font-[500] text-[7px] leading-[11px] text-center ${
                index === 2 && "text-[11px]"
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
          {cash !== "" && (
            <div
              style={{
                backgroundColor: "#1A202C",
              }}
              className={` gap-y-1 flex flex-col justify-center items-center py-1 px-5  shadow-lg  border border-gray-800  ${
                index === 2 ? "rounded-full p-4" : "w-[51px] h-[55px]"
              } `}
            >
              <span
                className={`inline-block  text-[#718096] font-[500] text-[9px] leading-[11px] text-center ${
                  index === 2 && "text-[10px]"
                }`}
              >
                Smash Cash
              </span>
              <div className="flex items-center justify-center w-full overflow-hidden gap-x-1 ">
                <Image
                  src={cashIcon}
                  className="w-[12px] h-[12px]"
                  alt="cash"
                />
                <span
                  className={`inline-block text-white font-[400]  text-[11px] leading-[17px] text-center ${
                    index == 2 && "text-[19px] font-Saira"
                  }`}
                >
                  {cash}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
