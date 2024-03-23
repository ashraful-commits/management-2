import React from 'react'
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function PageHeader({ children }) {
    return (
        <>
            <section className="bg-[url('/head-bg.png')] bg-cover pt-[200px] bg-center bg-black">
                <div className='mb-20'>
                    <h1 className="gradiant_text text-center font-extrabold text-transparent bg-clip-text text-[22px] sm:text-[35px] md:text-[50px] xl:text-[54px] leading-[.9] md:leading-[.9] mb-2 md:mb-0">
                        SMASH VIDEOS
                    </h1>
                    <p className='text-center mt-5'>
                        Watch all WCT content in one place. Highlights, full matches and trending videos on demand.
                    </p>
                    <div className='flex items-center border-[#545460] border-2 rounded-lg px-5 py-1.5 w-[40%] mx-auto mt-5 bg-[#1c1c24bd] focus-visible:!ring-0  focus-visible:shadow-none'>
                        <Search />
                        <Input placeholder="Search Videos" type="text" className="!border-none bg-transparent --tw-ring-offset-shadow !shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" />
                    </div>
                </div>
                {children}
            </section>
        </>
    )
}
