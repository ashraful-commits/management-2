import React from 'react'
import videoThumb from "@/public/videoThumb.png";
import PlayBtn from "@/public/PlayBtn.svg";
import Image from 'next/image';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function RulesVideo() {
    return (
        <div className='bg-black pt-[50px] pb-[20px] md:py-[100px]'>
            <div className="container mx-auto">
                <h1 className='my-[120px] text-center font-extrabold text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] max-sm:mb-[40px]'>RULES & TERMINOLOGY</h1>
            </div>

            <div className="section_top text-center mb-4">
                <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[22px] sm:text-[35px] md:text-[50px] xl:text-[54px] leading-[.9] md:leading-[.9] mb-2 md:mb-0">
                    LEARN THE RULES OF <br />
                    SMASH GOLF TOURNAMENTS
                </h2>
                <div className='text-center flex justify-center mt-10 relative mx-10'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
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
                    <Image className='overflow-hidden rounded-lg' src={videoThumb} alt='video thumb' />
                </div>
            </div>
        </div>
    )
}
