import React from "react";
import VideoSlider from "@/components/watch/VideoSlider";
import HowtoPlay from "@/components/watch/HowtoPlay";
import Videos from "@/components/watch/Videos";
import video from "../../../public/data/video.json";
import Link from "next/link";

export default function WatchPage() {
  return (
    <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-12">
        <h1 className="mb-5 text-white text-2xl 2xl:text-3xl font-semibold ml-2">
          Featured Videos
        </h1>
      </div>
      <div className="col-span-12 md:col-span-7 max-w-full">
        <VideoSlider />
      </div>
      <div className="col-span-12 md:col-span-5 max-w-full bg-lightblue rounded-[20px] md:p-5 p-4">
        <HowtoPlay />
      </div>
      <div className="col-span-12 mt-10 mb-16">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Trending Videos</h1>
          <Link className="text-sm bg-white/10 px-5 py-2 rounded-md" href="/">
            See All
          </Link>
        </div>
        {video && <Videos data={video} />}
      </div>
      <div className="col-span-12 mt-10 mb-16">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">All Videos</h1>
          <Link className="text-sm bg-white/10 px-5 py-2 rounded-md" href="/">
            See All
          </Link>
        </div>
        {video && <Videos data={video} />}
      </div>
    </div>
  );
}
