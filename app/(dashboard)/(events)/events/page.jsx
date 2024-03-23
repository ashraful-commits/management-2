import React from "react";
import LeaderBoards from "@/components/newsfeed/LeaderBoards";
import Slider from "@/components/newsfeed/Slider";
import UpcomingEvents from "@/components/newsfeed/UpcomingEvents";
import UpcomingTournaments from "@/components/newsfeed/UpcomingTournaments";
import PopularGames from "@/components/newsfeed/PopularGames";
import EventPageSlider from "@/components/events/sliders/event-page-slider/EventPageSlider";

export default function page() {
  return (
    <>
      <h1 className="mb-5 text-white text-2xl font-semibold ml-2">
       Events
      </h1>
      <div className="flex max-xl:flex-col mb-4">
        <div className="w-full max-xl:w-full xl:mr-2">
          <EventPageSlider />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <UpcomingEvents />
        </div>
      </div>
      <div className="mt-5">
        <UpcomingTournaments />
      </div>
      <div className="mt-5 mb-16">
        <PopularGames />
      </div>
    </>
  );
}

export const metadata = {
  title: "Events | Smash Golf Tour",
  description: "Welcome to your dashboard",
};
