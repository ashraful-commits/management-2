'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import VideoCard from "./VideoCard";

// Import Swiper styles
import "swiper/css";


export default function Videos(props) {
    const video = props.data
    return (
        <>
            <div className="trending-slider ml-[5px]">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1920: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }} className="mySwiper">
                    {video.map((trendingVideo, index) => (
                        <SwiperSlide key={index}>
                            <VideoCard data={trendingVideo} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
