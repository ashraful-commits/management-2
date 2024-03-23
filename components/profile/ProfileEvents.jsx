"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import ProfileEvent from "@/components/profile/ProfileEvent";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
const ProfileEvents = (props) => {
  const data = props.data || [];
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = data.filter((event) => {
    return event.eventName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h4 className="text-xl font-semibold">Upcoming Events</h4>
      <Input
        onChange={handleSearchChange}
        placeholder="Event Name..."
        className="pl-3 w-[300px] mt-5 lg:w-[300px] max-sm:w-[180px] bg-[#30303A] border-[#30303A] focus-visible:ring-offset-0 text-white placeholder:text-white"
      />
      <div className="mt-5">
        <ScrollArea className="h-[827px]  flex flex-col gap-y-2">
          {filteredEvents.map((item, index) => (
            <ProfileEvent
              key={index}
              photo={item.imgUrl}
              title={item.eventName}
            />
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default ProfileEvents;
