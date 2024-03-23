import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
export default function EventsCard(props) {
  const upcomingevent = props.data;
  return (
    <div
      className="min-h-[400px] bg-cover bg-center flex justify-end flex-col p-5 w-full mt-4 rounded-2xl shadow-lg hover:shadow-[#494949] transition"
      style={{ backgroundImage: `url(${upcomingevent.event_poster})` }}
    >
      <Link href={`/events/${upcomingevent.id}`} className="relative">
        <h3 className="font-bold text-[21px]">{upcomingevent.name}</h3>
        <p className="mb-2 text-sm font-light">
          {new Date(upcomingevent.start_time).toLocaleDateString()} -{" "}
          {new Date(upcomingevent.end_time).toLocaleDateString()}
        </p>
        <div className="flex items-center justify-between gap-2 bottom">
          <div className="flex items-center gap-2">
            <Image width={24} height={24} src="/ps5.svg" alt="" />
            <span className="font-light">
              <b className="font-bold">{upcomingevent.participants}</b>{" "}
              Participants
            </span>
          </div>
          <div className="inline-block p-2 rounded-full bg-white/20">
            <ChevronRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
