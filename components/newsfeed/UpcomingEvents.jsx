"use client";

import Link from "next/link";
import React from "react";
import upcomingevents from "../../public/data/upcomingevents.json";
import EventsCard from "../cards/EventsCard";
import EventSlider from "../EventSlider";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/apiInstance";

export default function UpcomingEvents() {
  const { data, error, isLoading } = useSWR(
    "/events?status=upcoming_events",
    fetcher
  );

  if (isLoading) {
    return (
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (error) {
    return <p>There was an error</p>;
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Upcoming Events</h1>
        <Link className="text-sm" href={"/events"}>
          See All
        </Link>
      </div>
      <ResponsiveContainer minWidth={1080}>
        {data &&
        data.data &&
        Array.isArray(data.data) &&
        data.data.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {data &&
              data.data.map((upcomingevent, index) => (
                <EventsCard data={upcomingevent} key={index} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-20">
            <p>No upcoming events as of now</p>
          </div>
        )}
      </ResponsiveContainer>

      <ResponsiveContainer maxWidth={1080}>
        <EventSlider data={upcomingevents} />
      </ResponsiveContainer>
    </>
  );
}
