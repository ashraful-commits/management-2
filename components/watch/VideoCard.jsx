import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye } from "lucide-react";
import PlayBtn from "@/public/PlayBtn.svg";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


export default function VideoCard(props) {
    const trendingVideos = props.data
    return (
        <div className="overflow-hidden bg-[#1C1C24] w-full mt-4 rounded-[20px] shadow-lg hover:shadow-[#494949] transition">
            <div className='relative'>
                <div className="absolute w-full">
                    <div className="flex p-5 justify-between !w-full">
                        <span className='bg-white/10 backdrop-blur px-3 py-1 rounded-md'>{trendingVideos.duration}</span>
                        <span className='flex items-center bg-white/10 backdrop-blur px-3 py-1 rounded-md'>
                            <Eye />
                            <span className='ml-1'>
                                {trendingVideos.views}
                            </span>
                        </span>
                    </div>
                </div>

                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2">
                    <Dialog>
                        <DialogTrigger className="w-[40px] h-[40px] rounded-full bg-white backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
                            <Image src={PlayBtn} alt='play button' className='w-[60px]' />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogDescription>
                                    <iframe
                                        width="100%"
                                        className="videoRatio"
                                        src={trendingVideos?.url}
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

                <Image width={200} height={200} className='w-full' src={trendingVideos.imgUrl} alt='' />
            </div>

            <div className="text_area p-4">
                <h2 className="font-semibold text-[18px]">{trendingVideos.name}</h2>
                <span className='text-sm'>{trendingVideos.time}</span>
            </div>
        </div>
    )
}
