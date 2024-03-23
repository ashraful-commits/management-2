import React from "react";
import EventsLeaderboards from "@/components/leaderboards/EventsLeaderboards";
import Achievements from "@/components/leaderboards/achievements";
import SmashCoin from "@/components/leaderboards/SmashCoin";
import DataTable from "@/components/leaderboards/DataTable";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import DataTableCard from "@/components/cards/DataTableCard";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/homepage/Footer";
import l1 from "@/public/leaderboards/l1.jpg";
import l2 from "@/public/leaderboards/l2.jpg";
import l3 from "@/public/leaderboards/l3.jpg";
import l4 from "@/public/leaderboards/l4.jpg";
import l5 from "@/public/leaderboards/l5.jpg";
import l6 from "@/public/leaderboards/l6.jpg";

const Lists = [
  {
    name: "Events",
    url: "/leaderboards/events",
    imgUrl: l1,
  },
  {
    name: "Tournaments",
    url: "/leaderboards/tournaments",
    imgUrl: l2,
  },
  {
    name: "Leagues",
    url: "/leaderboards/leagues",
    imgUrl: l3,
  },
  {
    name: "World",
    url: "/leaderboards/World",
    imgUrl: l4,
  },
  {
    name: "Games",
    url: "/leaderboards/games",
    imgUrl: l5,
  },
  {
    name: "All",
    url: "/leaderboards/all",
    imgUrl: l6,
  },
];
import { getSession } from "@/lib/session.js";
import CombinePopup from "./../../components/model/CombinePopup";

export default async function Leaderboards() {
  const session = await getSession();
  return (
    <div className="p-8">
      <CombinePopup />
      <h4
        className={`text-3xl font-semibold ${
          !session && "text-center"
        } text-white font-Saira`}
      >
        Leaderboards
      </h4>
      <p className={`${!session && "text-center"}`}>
        What would you like to view?
      </p>
      <div className="grid grid-cols-3 gap-5 my-20">
        {Lists.map((list, index) => (
          <Link href={list.url} className="relative overflow-hidden rounded-md">
            <Image src={list.imgUrl} alt="thumbnails" className="w-full" />
            <h4 className="absolute left-0 w-full text-4xl font-semibold text-center bottom-10 font-Saira">
              {list.name}
            </h4>
          </Link>
        ))}
      </div>
      {/* <EventsLeaderboards />
        <EventsLeaderboards /> */}
    </div>
  );
}
