import React from 'react'
import { Eye } from 'lucide-react';
import Image from 'next/image';

import thumb from '../../public/thumb.jpg'
import PlayBtn from '../../public/PlayBtn.svg'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function TrendingVideos() {

    const videoList = [
        {
            "title": "Golf Tournaments 2023",
            "thumbnail": thumb,
            "type": "Jerome Bell",
            "time": "2 hours 40 minutes",
            "duration": "01:49",
            "views": "1,235"
        },
        {
            "title": "Golf Tournaments 2024",
            "thumbnail": thumb,
            "type": "Jerome Bell",
            "time": "3 hours 40 minutes",
            "duration": "01:49",
            "views": "1,235"
        }
    ]

    return (
        <div className="container">
            <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[22px] sm:text-[30px] md:text-[30px] xl:text-[30px] leading-[.9] md:leading-[.9] mb-5">
                TRENDING VIDEOS
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                {videoList.map((video) => <>
                    <div className='relative rounded-lg overflow-hidden'>
                        <div className='bg-black absolute left-0 top-0 w-full h-full inline-block bg-opacity-50'></div>
                        <Image className='w-full' src={video.thumbnail} alt="video thumb" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10'>
                            <Dialog>
                                <DialogTrigger>
                                    <Image src={PlayBtn} alt='play button' />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe width="100%" className='videoRatio' src="https://www.youtube.com/embed/NpEaa2P7qZI?si=sCsA_a054NUGjEvZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className='absolute top-0 left-0 w-full'>
                            <div className="flex justify-between p-5">
                                <span className='bg-black bg-opacity-25 px-3 py-1 rounded-lg'>{video.duration}</span>
                                <div className='flex justify-center items-center bg-black bg-opacity-25 px-3 py-1 rounded-lg'>
                                    <div>
                                        <Eye />
                                    </div>
                                    <span className='ml-2'>
                                        {video.views}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-5 left-5'>
                            <h6 className='text-white text-opacity-75'>{video.type}</h6>
                            <h4 className='text-white md:text-[26px] text-[20px] font-semibold'>{video.title}</h4>
                            <h6 className='text-white text-opacity-75'>{video.time}</h6>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    )
}
