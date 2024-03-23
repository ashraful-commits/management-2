import React from "react";
import LeaderboardTable from "@/components/leaderboards/LeaderboardTable";
import data from "@/public/data/eventsLeaderboard.json";
import Image from "next/image";
import events_bg from "@/public/leaderboards/leauge_bg.png";
import {getSession} from "@/lib/session.js"
export default async function LeaguesPage() {
  const session = await getSession()
  return (
    <div className="px-10">
      <Image
        className="absolute top-0 left-0 w-full -z-10"
        src={events_bg}
        alt="demo"
      />
      <h4 className={`relative px-5 pt-10 mb-10 text-xl font-semibold ${!session && "text-center"} font-Saira`}>
        Leaderboards / Leagues
      </h4>
      <LeaderboardTable data={data} title="leagues" />
    </div>
  );
}
