import React from "react";
import { Trophy, Clock3 } from "lucide-react";
import Image from "next/image";

export default function AchivementsCards(props) {
  const achievement = props.data;

  return (
    <div className="mt-4 p-5 bg-[url('../public/achievement_bg.png')] bg-[length:100%_100%] bg-center rounded-2xl">
      <div className="flex items-center gap-5 mb-5">
        <p className="text-[.8125rem] flex gap-1 bg-[#080808] rounded py-[.1875rem] px-2 items-center font-semibold">
          <Trophy color="#FFD233" size={15} /> ${achievement.score}
        </p>
        <p className="text-[.8125rem] flex gap-1 bg-[#080808] rounded py-[.1875rem] px-2 items-center font-semibold">
          <Clock3 color="#A5B2BC" size={15} /> {achievement.time}
        </p>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <Image
          width={45}
          height={45}
          className="h-[2.8125rem]"
          src="/amongus.png"
          alt=""
        />
        <div className="text-left">
          <p className="text-[1.1875rem] font-semibold">{achievement.title} </p>
          <p className="text-[.875rem] font-semibold">
            in {achievement.gameName}
          </p>
        </div>
      </div>
      <div className="w-full bg-white rounded-full h-2.5 mb-5">
        <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#A0A0A0]">02/05</p>
        <p className="text-sm text-[#FE1F27]">3 Left</p>
      </div>
    </div>
  );
}
