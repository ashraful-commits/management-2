import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import phone from "../../public/phone.png"

export default function HowtoPlay() {
    return < section className="how_to_play py-[40px] md:py-[100px] bg-[url('/bg_4.jpg')] bg-cover bg-center" id="how_to_play" >
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 md:col-span-3  text-center overflow-hidden">
                    <Image className="inline-block mt-4 md:max-w-full max-w-[70%]" src={phone} alt='phone image' />
                </div>
                <div className="col-span-6 md:col-span-3">
                    <h3 className="text-[14px] md:text-[20px] lg:text-[24px] mb-[0px] md:mb-[-5px] mt-5 md:mt-0 text-[#ED118F]">
                        BE PART OF A COMMUNITY OF  GOLFERS
                    </h3>
                    <h2 className="font-extrabold text-[28px] sm:text-[35px] md:text-[50px] xl:text-[64px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                        SMASH GOLF TOUR
                    </h2>
                    <div className="mb-4 max-w-[570px] text-white !font-sans">
                        <span className="text-white text-2xl block">Step 1</span>
                        <p className='text-sm'>
                            Create ISGT Profile, your profile will track your scoring, ranking,
                            Smash Cash, World Championship Points and more.
                        </p>
                    </div>
                    <div className="mb-4 max-w-[570px] text-white !font-sans">
                        <span className="text-white text-2xl block">Step 2</span>
                        <p className='text-sm'>
                            Get ISGT Handicap by entering your Inrange handicap or average 9-hole score on golf course. This will generate your initial ISGT HNCP and will
                            update after every ISGT tournament you play in.
                        </p>
                    </div>
                    <div className="mb-4 max-w-[570px] text-white !font-sans">
                        <span className="text-white text-2xl block">Step 3</span>
                        <p className='text-sm'>
                            Get ISGT Handicap by entering your Inrange handicap or average 9-hole score on golf course. This will generate your initial ISGT HNCP and will
                            update after every ISGT tournament you play in.
                        </p>
                    </div>
                    <div className="mb-4 max-w-[570px] text-white !font-sans">
                        <span className="text-white text-2xl block">Step 4</span>
                        <p className='text-sm'>
                            Bay Monitor will unlock event and you are ready to Play. After you
                            complete your round, your score will automatically be sent to Smashgolftour.com.
                            After a few minutes you can see where you stand within your flight leaderboard
                        </p>
                    </div>
                    <div className="mb-4 max-w-[570px] text-white !font-sans">
                        <span className="text-white text-2xl block">Step 5</span>
                        <p className='text-sm'>
                            After completion of the tournament/contest, Smash Cash that is won
                            will be deposited into your profile. When you want redeem, go Smash Store and
                            redeem your Smash Cash for prizes from Golf&#39;s Best Brands.
                        </p>
                    </div>
                    <Link className="inline-block  rounded-md text-[15px]  text-white bg-[#3F83F8] px-[25px] py-[12px] mt-5 hover:text-[#3F83F8] hover:bg-[#fff] font-russo_one uppercase" href="#">Get Started</Link>
                </div>
            </div>
        </div>
    </section >
}
