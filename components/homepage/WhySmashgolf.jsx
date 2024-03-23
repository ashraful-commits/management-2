import React from 'react'
import Link from 'next/link'
export default function WhySmashgolf() {
    return <section className="smash_golf py-[50px] bg-[url('/bg_3.jpg')] md:py-[180px] bg-cover bg-center max-md:bg-left">
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-6 md:col-span-4">
                    <h3 className="uppercase text-[18px] md:text-[20px] lg:text-[24px] mb-[0px] md:mb-[-5px] text-[#ED118F]">
                        WHY DID WE START THE
                    </h3>
                    <h2 className="font-extrabold text-[28px] sm:text-[35px] md:text-[48px] xl:text-[48px] leading-[1] md:leading-[1] my-2 md:mb-0">
                        INRANGE <br />
                        SMASH GOLF TOUR
                    </h2>
                    <p className="my-4 max-w-[500px] text-white !font-sans">
                        Traditional Golf&#39;s historical challenges have always been and will always
                        be:
                    </p>
                    <p className='mb-4 font-semibold'>
                        1.) Takes Too Long. <br />
                        2.) Too Difficult. <br />
                        3.) Too Expensive.
                    </p>
                    <p className="max-w-[500px] text-white !font-sans">
                        Golf needed an option that overcame those challenges, and the
                        combination of the interactive and innovative Inrange Technology with the
                        ISGT skill level scoring, flighting and leaderboards does just that. In addition, with the ISGT you don&#39;t have to get hounded by the starter or
                        marshal, get paired with people you don&#39;t know, look for lost ball&#39;s, take
                        five hours or pay a fortune for greens/entry fee&#39;s, travel etc..

                    </p>
                    <p className='font-semibold mt-5'>
                        Time to Play, Get started Today!
                    </p>
                    <Link className="inline-block  rounded-md text-[15px]  text-white bg-[#3F83F8] px-[25px] py-[12px] mt-10 hover:text-[#3F83F8] hover:bg-[#fff] font-russo_one uppercase" href="#">Get Started</Link>
                </div>
                <div className="col-span-6 md:col-span-2">
                </div>
            </div>
        </div>
    </section >
}
