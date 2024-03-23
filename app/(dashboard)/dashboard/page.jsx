import React from "react";
import LeaderBoards from "@/components/newsfeed/LeaderBoards";
import Slider from "@/components/newsfeed/Slider";
import UpcomingEvents from "@/components/newsfeed/UpcomingEvents";
import UpcomingTournaments from "@/components/newsfeed/UpcomingTournaments";
import PopularGames from "@/components/newsfeed/PopularGames";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="mb-5 text-white text-2xl font-semibold ml-2">
        Hi James,{" "}
        <span className="!text-sm font-light text-[#92929D]">
          Welcome to Smash Golf Tour
        </span>{" "}
      </h1>
      <div className="grid grid-cols-12 gap-4 max-xl:grid-cols-1">
        <div className="col-span-7 max-xl:col-span-full xl:mr-2">
          <Slider />
        </div>
        <div className="col-span-5 max-xl:col-span-full max-xl:mt-4 bg-lightblue rounded-[20px] xl:ml-2 p-5">
          <LeaderBoards />
        </div>
        <div className="col-span-full">
          <UpcomingEvents />
        </div>
        <div className="mt-5 col-span-full">
          <UpcomingTournaments />
        </div>
        <div className="mt-5 mb-16 col-span-full">
          <PopularGames />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Dashboard | Smash Golf Tour",
  description: "Welcome to your dashboard",
};
