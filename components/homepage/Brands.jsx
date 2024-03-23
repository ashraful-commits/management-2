import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import redeem from '../../public/redeem.jpg'
import coin from '../../public/coin.svg';

export default function Brands() {
    return (
        <section className="brand py-[100px] bg-[url('/dark_bg.jpg')] bg-[length:100%_100%] bg-center" id="brand" >
            <div className="container mx-auto px-5">
                <h2 className="font-extrabold text-[22px] sm:text-[24px] md:text-[30px] text-center leading-[1.2] md:leading-[1.4] text-[#ED118F]">
                    REEDEM SMASH CASH FOR GOLF&#39;S HOTTEST BRANDS
                </h2>
                <ul className="flex gap-10 items-center justify-center mt-10 flex-wrap">
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_1.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_2.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_3.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_4.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_5.png" alt='' />
                    </li>
                </ul>
                <Link className="mt-8 flex justify-center w-[190px] mx-auto rounded-md text-[15px]  text-white bg-[#3F83F8] px-[25px] py-[12px] hover:text-[#3F83F8] hover:bg-[#fff] font-russo_one uppercase" href="#">
                    Shop Now
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[80%] gap-5 mx-auto mt-20">
                    <div className='bg-[#1C1C24] rounded-lg overflow-hidden'>
                        <Image className='w-full' src={redeem} alt='redeem' />
                        <div className='m-4'>
                            <div className='flex items-center mb-2'>
                                <span>
                                    <Image src={coin} alt='coin icon' />
                                </span>
                                <h6 className='ml-2 text-sm text-[#FFC600]'>100 SMASH CASH</h6>
                            </div>
                            <h4 className='text-sm'>Medium Bucket of Balls At PBN</h4>
                            <Link href="/" className='mt-4 w-full text-center text-md font-semibold border-2 p-2 inline-block rounded-md border-[#3F83F8] duration-300 hover:bg-[#ED118F] hover:border-[#ED118F]'>
                                REDEEM NOW
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#1C1C24] rounded-lg overflow-hidden'>
                        <Image className='w-full' src={redeem} alt='redeem' />
                        <div className='m-4'>
                            <div className='flex items-center mb-2'>
                                <span>
                                    <Image src={coin} alt='coin icon' />
                                </span>
                                <h6 className='ml-2 text-sm text-[#FFC600]'>400 SMASH CASH</h6>
                            </div>
                            <h4 className='text-sm'>Medium Bucket of Balls At PBN</h4>
                            <Link href="/" className='mt-4 w-full text-center text-md font-semibold border-2 p-2 inline-block rounded-md border-[#3F83F8] duration-300 hover:bg-[#ED118F] hover:border-[#ED118F]'>
                                REDEEM NOW
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#1C1C24] rounded-lg overflow-hidden'>
                        <Image className='w-full' src={redeem} alt='redeem' />
                        <div className='m-4'>
                            <div className='flex items-center mb-2'>
                                <span>
                                    <Image src={coin} alt='coin icon' />
                                </span>
                                <h6 className='ml-2 text-sm text-[#FFC600]'>400 SMASH CASH</h6>
                            </div>
                            <h4 className='text-sm'>Medium Bucket of Balls At PBN</h4>
                            <Link href="/" className='mt-4 w-full text-center text-md font-semibold border-2 p-2 inline-block rounded-md border-[#3F83F8] duration-300 hover:bg-[#ED118F] hover:border-[#ED118F]'>
                                REDEEM NOW
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#1C1C24] rounded-lg overflow-hidden'>
                        <Image className='w-full' src={redeem} alt='redeem' />
                        <div className='m-4'>
                            <div className='flex items-center mb-2'>
                                <span>
                                    <Image src={coin} alt='coin icon' />
                                </span>
                                <h6 className='ml-2 text-sm text-[#FFC600]'>400 SMASH CASH</h6>
                            </div>
                            <h4 className='text-sm'>Medium Bucket of Balls At PBN</h4>
                            <Link href="/" className='mt-4 w-full text-center text-md font-semibold border-2 p-2 inline-block rounded-md border-[#3F83F8] duration-300 hover:bg-[#ED118F] hover:border-[#ED118F]'>
                                REDEEM NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
