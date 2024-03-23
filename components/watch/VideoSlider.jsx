"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { EffectFade, Pagination } from 'swiper/modules';

import Image from 'next/image';

import PlayBtn from "@/public/PlayBtn.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import VideoSliderData from "../../public/data/videoslider.json"

export default function VideoSlider() {
    const [swiper, setSwiper] = useState(null);

    return (
        <div className='relative'>
            <Swiper onSwiper={(s) => setSwiper(s)}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop="true"
                modules={[EffectFade, Autoplay, Pagination]} effect="fade"
                pagination={true}
                spaceBetween={30}
                slidesPerView={1} className="mySwiper rounded-xl">
                {VideoSliderData.map((singleSlider, index) => (
                    <SwiperSlide
                        className="min-h-[420px] 2xl:min-h-[600px] bg-cover bg-center !flex justify-end flex-col p-10 relative max-sm:min-h-[250px]"
                        style={{ backgroundImage: `url(${singleSlider.imgUrl})` }}
                        key={index}
                    >

                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                            <Dialog>
                                <DialogTrigger>
                                    <Image src={PlayBtn} alt='play button' className='w-[60px]' />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe width="100%" className='videoRatio' src={singleSlider.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <h1 className='text-white text-2xl font-semibold leading-normal w-[80%] max-sm:text-[16px]'>
                            {singleSlider.name}
                        </h1>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
