import React from "react";
import { Eye } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PlayBtn from "@/public/PlayBtn.svg";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import HowtoPlayData from "../../public/data/HowtoPlayData.json";
import { Play } from "lucide-react";
export default function HowtoPlay() {
    return (
        <>
            <div className="sticky bottom-0 flex items-center justify-between mb-2 ">
                <h4 className="mb-1 text-xl 2xl:text-3xl font-semibold text-white st">
                    How To Play
                </h4>
            </div>

            <ScrollArea className="max-h-[200px] 2xl:min-h-[562px] scrollbar relative overflow-y-scroll scrollbar-thumb-indigo-500 scroll-smooth touch-pan-y">
                {/* <ScrollBar orientation="vertical" /> */}
                {HowtoPlayData.map((leaderboard, index) => (
                    <div
                        className="flex items-center justify-between w-full gap-5 mt-5 single_leader"
                        key={index}
                    >
                        <div className="flex items-center justify-center gap-4 profile pr-3">
                            <div className="relative z-0 backdrop:blur-sm">
                                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2">
                                    <Dialog>
                                        <DialogTrigger className="w-[24px] h-[24px] rounded-full bg-white backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
                                            <Image src={PlayBtn} alt='play button' className='w-[60px]' />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <iframe
                                                        width="100%"
                                                        className="videoRatio"
                                                        src={leaderboard?.url}
                                                        title="YouTube video player"
                                                        frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen
                                                    ></iframe>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <Image
                                    width={100}
                                    height={70}
                                    src={leaderboard.imgUrl}
                                    alt=""
                                    className="rounded-xl 2xl:w-[160px] 2xl:mr-5"
                                />
                            </div>
                            <div className="info">
                                <h4 className="text-md 2xl:text-2xl text-white mb-1 max-sm:text-[16px] sm:font-semibold">
                                    {leaderboard.title}
                                </h4>
                                <p className="text-[#92929D] text-xs max-sm:text-[10px] flex items-center">
                                    {leaderboard.time}
                                    <span className="mx-2">
                                        {" "}
                                        <Eye />
                                    </span>
                                    <span>{leaderboard.view}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </>

    );
}
