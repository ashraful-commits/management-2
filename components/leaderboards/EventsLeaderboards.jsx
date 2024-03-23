import React from 'react'
import LeaderboardTable from './LeaderboardTable'


export default function EventsLeaderboards() {
    return (
        <div className='bg-[#1C1C24] rounded-xl shadow-lg overflow-hidden mt-6'>
            <h4 className='text-xl font-semibold pt-10 px-10'>Events Leaderboards</h4>
            <LeaderboardTable data={leaderboardData} />
        </div>
    )
}
