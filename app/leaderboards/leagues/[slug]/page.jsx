
import React from 'react'
import LeaderboardTabledata from "@/components/leaderboards/LeaderboardTabledata"
import UpcomingEvents from "@/components/newsfeed/UpcomingEvents";
import InfluencerCard from "@/components/cards/InfluencerCard";
import avatar1 from "@/public/will smith 1.png";
import avatar2 from "@/public/will smith 2.png";
import avatar3 from "@/public/chrish.png";
import award from "@/public/Award.png";
import award2 from "@/public/Trophy Cup.png";
import award3 from "@/public/Awardblue.png";
import CallToAction from "@/components/leaderboards/CallToAction"
import {getSession} from "@/lib/session.js"
export default async function DetailsPage({ params }) {
  const slug = params.slug
  const session = await getSession()
  const title = slug.toLowerCase().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return (

    <div className="flex flex-col p-10 mt-2">
      <h4 className={`text-3xl font-semibold text-white font-Saira ${!session && "text-center"}`}>
        Leaderboards / Leagues / {title}
      </h4>
      <div className="relative flex items-end justify-center w-full mt-32 gap-x-10">
        <InfluencerCard
          avatar={avatar1}
          award={award3}
          name="William Smith"
          net={185}
          cash={1500}
          Handicap={185}
          index={1}
        />
        <InfluencerCard
          avatar={avatar3}
          award={award2}
          name="Chrissy Barnes"
          net={185}
          cash={1500}
          Handicap={185}
          index={2}
        />
        <InfluencerCard
          avatar={avatar2}
          award={award}
          name="Papa Juncie"
          net={185}
          cash={1500}
          Handicap={185}
          index={3}
        />
      </div>
      {title && <LeaderboardTabledata title={title} />
      }
      <div className='mt-14'>
        <UpcomingEvents />
      </div>
      <CallToAction/>
    </div>
  )
}
