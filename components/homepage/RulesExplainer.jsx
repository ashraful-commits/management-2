import React from 'react'
import Image from 'next/image'
import t1 from '@/public/t1.png'
import t2 from '@/public/t2.png'
import t3 from '@/public/t3.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs2"
import ResponsiveContainer from '../ResponsiveContainer'


export default function RulesExplainer() {
    return (
        <>
            <ResponsiveContainer minWidth={1440}>
                <div className='bg-black pt-[50px] pb-[100px] md:py-[100px]'>
                    <div className="container mx-auto">
                        <div className="section_top text-center mb-4">
                            <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                RULES EXPLAINER
                            </h2>
                            <p>
                                Register with Smash Golf Tour and connect with other gamers in the region. Connect, Compete and Win!
                            </p>
                        </div>
                        <Tabs defaultValue="tag" className='relative'>
                            <TabsContent value="tag">
                                <div className="flex mt-24 items-center lg:flex-row flex-col-reverse">
                                    <div className="lg:w-6/12 lg:px-0 w-full px-4 ">
                                        <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[50px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                            CHASE TAG
                                        </h2>
                                        <p>
                                            wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.
                                        </p>
                                        <ul className='ml-4 mt-5 [&>li]:flex [&>li]:items-center [&>li]:mb-4 [&>li]:text-sm'>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                This is our most popular format and is used at our main events
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                It is a team format that is played by two teams of up to 6 athletes.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Each match is the best of 16 Chases.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Each Chase is 20 seconds long with one Chaser and one Evader.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                There is a 25 second Rest Period between Chases.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                The winning athlete in each Chase stays on as the Evader for the next Chase.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                A team is awarded one point for each Evasion they make.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Tags must be made with the hand (I.e. NOT the foot).
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="lg:w-6/12 lg:px-0 w-full px-4 ">
                                        <Image src={t1} alt='' />
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="death">
                                <div className="flex mt-24 items-center lg:flex-row flex-col-reverse">
                                    <div className="lg:w-6/12 lg:px-0 w-full px-4 ">
                                        <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[50px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                            SUDDEN DEATH CHASE
                                        </h2>
                                        <p>
                                            wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.
                                        </p>
                                        <ul className='ml-4 mt-5 [&>li]:flex [&>li]:items-center [&>li]:mb-4 [&>li]:text-sm'>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                This is our most popular format and is used at our main events
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                It is a team format that is played by two teams of up to 6 athletes.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Each match is the best of 16 Chases.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Each Chase is 20 seconds long with one Chaser and one Evader.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                There is a 25 second Rest Period between Chases.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                The winning athlete in each Chase stays on as the Evader for the next Chase.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                A team is awarded one point for each Evasion they make.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Tags must be made with the hand (I.e. NOT the foot).
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="lg:w-6/12 lg:px-0 w-full px-4 ">
                                        <Image src={t2} alt='' />
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="chase">
                                <div className="flex mt-24 items-center lg:flex-row flex-col-reverse">
                                    <div className="lg:w-6/12 lg:px-0 w-full px-4 ">
                                        <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[50px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                            WORLD CHASE
                                        </h2>
                                        <p>
                                            wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.
                                        </p>
                                        <ul className='ml-4 mt-5 [&>li]:flex [&>li]:items-center [&>li]:mb-4 [&>li]:text-sm'>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                This is our most popular format and is used at our main events
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                It is a team format that is played by two teams of up to 6 athletes.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Each match is the best of 16 Chases.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Each Chase is 20 seconds long with one Chaser and one Evader.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                There is a 25 second Rest Period between Chases.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                The winning athlete in each Chase stays on as the Evader for the next Chase.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                A team is awarded one point for each Evasion they make.
                                            </li>
                                            <li>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6'>
                                                </span>
                                                Tags must be made with the hand (I.e. NOT the foot).
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="lg:w-6/12 lg:px-0 w-full px-4 ">
                                        <Image src={t3} alt='' />
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsList className="absolute -right-10 top-1/2  transform -translate-y-1/2">
                                <TabsTrigger value="tag">
                                    CHASE TAG
                                </TabsTrigger>
                                <TabsTrigger value="death">
                                    SUDDEN DEATH
                                </TabsTrigger>
                                <TabsTrigger value="chase">
                                    WORLD CHASE
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>

                    </div>
                </div>
            </ResponsiveContainer>

            <ResponsiveContainer maxWidth={1440}>
                <div className='bg-black pt-[50px] pb-[40px] md:py-[100px]'>
                    <div className="container mx-auto">
                        <div className="section_top text-center mb-4">
                            <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                RULES EXPLAINER
                            </h2>
                        </div>
                        <Tabs2 defaultValue="tag1">
                            <TabsList2 className="!flex !flex-row justify-center">
                                <TabsTrigger2 value="tag1" className="mx-2 md:mx-4 !text-[12px]">
                                    CHASE TAG
                                </TabsTrigger2>
                                <TabsTrigger2 value="death1" className="mx-2 md:mx-4 !text-[12px]">
                                    SUDDEN DEATH
                                </TabsTrigger2>
                                <TabsTrigger2 value="chase1" className="mx-2 md:mx-4 !text-[12px]">
                                    WORLD CHASE
                                </TabsTrigger2>
                            </TabsList2>
                            <TabsContent2 value="tag1">
                                <div className='p-4 border-2 m-2 rounded-xl !mt-10'>
                                    <h2 className="text-center gradiant_text font-extrabold text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[32px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                        CHASE TAG
                                    </h2>
                                    <p className='text-center'>
                                        wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.
                                    </p>
                                    <ul className='ml-4 mt-5 [&>li]:flex [&>li>div]:mt-1 [&>li]:mb-4 [&>li]:text-sm'>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            This is our most popular format and is used at our main events
                                        </li>
                                        <li>
                                            <div>
                                                <div>
                                                    <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                    </span>
                                                </div>
                                            </div>
                                            It is a team format that is played by two teams of up to 6 athletes.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Each match is the best of 16 Chases.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Each Chase is 20 seconds long with one Chaser and one Evader.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            There is a 25 second Rest Period between Chases.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            The winning athlete in each Chase stays on as the Evader for the next Chase.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            A team is awarded one point for each Evasion they make.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Tags must be made with the hand (I.e. NOT the foot).
                                        </li>

                                    </ul>
                                </div>
                            </TabsContent2>
                            <TabsContent2 value="death1">
                                <div className='p-4 border-2 m-2 rounded-xl !mt-10'>
                                    <h2 className="text-center gradiant_text font-extrabold text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[32px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                        SUDDEN DEATH CHASE
                                    </h2>
                                    <p className='text-center'>
                                        wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.
                                    </p>
                                    <ul className='ml-4 mt-5 [&>li]:flex [&>li>div]:mt-1 [&>li]:mb-4 [&>li]:text-sm'>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            This is our most popular format and is used at our main events
                                        </li>
                                        <li>
                                            <div>
                                                <div>
                                                    <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                    </span>
                                                </div>
                                            </div>
                                            It is a team format that is played by two teams of up to 6 athletes.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Each match is the best of 16 Chases.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Each Chase is 20 seconds long with one Chaser and one Evader.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            There is a 25 second Rest Period between Chases.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            The winning athlete in each Chase stays on as the Evader for the next Chase.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            A team is awarded one point for each Evasion they make.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Tags must be made with the hand (I.e. NOT the foot).
                                        </li>

                                    </ul>
                                </div>
                            </TabsContent2>
                            <TabsContent2 value="chase1">
                                <div className='p-4 border-2 m-2 rounded-xl !mt-10'>
                                    <h2 className="text-center gradiant_text font-extrabold text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[32px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">
                                        WORLD CHASE
                                    </h2>
                                    <p className='text-center'>
                                        wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.
                                    </p>
                                    <ul className='ml-4 mt-5 [&>li]:flex [&>li>div]:mt-1 [&>li]:mb-4 [&>li]:text-sm'>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            This is our most popular format and is used at our main events
                                        </li>
                                        <li>
                                            <div>
                                                <div>
                                                    <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                    </span>
                                                </div>
                                            </div>
                                            It is a team format that is played by two teams of up to 6 athletes.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Each match is the best of 16 Chases.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Each Chase is 20 seconds long with one Chaser and one Evader.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            There is a 25 second Rest Period between Chases.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            The winning athlete in each Chase stays on as the Evader for the next Chase.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            A team is awarded one point for each Evasion they make.
                                        </li>
                                        <li>
                                            <div>
                                                <span className='text-5xl bg-[#FFA500] rounded-full w-4 h-4 mr-6 inline-block'>
                                                </span>
                                            </div>
                                            Tags must be made with the hand (I.e. NOT the foot).
                                        </li>

                                    </ul>
                                </div>
                            </TabsContent2>
                        </Tabs2>

                    </div>
                </div>
            </ResponsiveContainer>
        </>
    )
}
