
"use client"
import React, { useState } from 'react';

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


export default function PaginationWithFilters() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const totalItem = 6

    const data = [
        {
            id: 1,
            category: 'Golf 2023',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 2,
            category: 'Golf 2023',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 3,
            category: 'Real Golf',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 4,
            category: 'Real Golf',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 5,
            category: 'Real Golf',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 6,
            category: 'Asia Cup',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 7,
            category: 'Real Golf',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 8,
            category: 'Asia Cup',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        },
        {
            id: 9,
            category: 'Real Golf',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        }, {
            id: 10,
            category: 'Real Golf',
            title: "Golf Tournaments 2023",
            thumbnail: thumb,
            type: "Jerome Bell",
            time: "2 hours 40 minutes",
            duration: "01:49",
            views: "1,235"
        },

    ];

    // Function to filter data based on selected filters
    const filteredData = selectedFilters.length
        ? data.filter((item) => selectedFilters.includes(item.category))
        : data;

    const totalPages = Math.ceil(filteredData.length / totalItem); // Assuming 3 items per page

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilterChange = (filter, checked) => {
        if (checked) {
            setSelectedFilters([...selectedFilters, filter]);
        } else {
            setSelectedFilters(selectedFilters.filter((selectedFilter) => selectedFilter !== filter));
        }
    };

    const filters = [...new Set(data.map((item) => item.category))];
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const paginatedData = filteredData.slice((currentPage - 1) * totalItem, currentPage * totalItem);

    return (
        <section className='bg-black py-[100px]'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase gradiant_text font-extrabold text-transparent bg-clip-text text-[22px] sm:text-[30px] md:text-[30px] xl:text-[30px] leading-[.9] md:leading-[.9] mb-5">
                        All VIDEOS
                    </h2>
                </div>
                <div className="md:flex gap-4 flex-grow">
                    <div className="md:w-3/12 w-full bg-[#1C1C24] rounded-xl p-4 md:mb-0 mb-5">
                        <ul className='[&>li]:flex [&>li]:items-center [&>li]:mb-5 mb-10'>
                            <li className='text-[#3F83F8] bg-[#19191F] py-4 rounded-lg'>
                                <span className='w-[50px]'>
                                    <svg className='mx-auto' width="11" height="19" viewBox="0 0 11 19" fill="#3F83F8" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.63822 0.000285267C6.56399 0.00560156 6.49221 0.0291156 6.42923 0.0687696C6.36626 0.108424 6.31402 0.162983 6.27715 0.227626L0.39303 10.4178C0.353361 10.4868 0.332575 10.5651 0.332765 10.6447C0.332955 10.7243 0.354115 10.8024 0.394114 10.8712C0.434113 10.94 0.491538 10.9971 0.560605 11.0367C0.629673 11.0762 0.707944 11.0968 0.787536 11.0965C2.24161 11.0965 3.69306 11.0965 5.14714 11.0965L3.29832 18.0003C3.27015 18.1063 3.28139 18.2189 3.32994 18.3173C3.37849 18.4156 3.46107 18.4929 3.56234 18.535C3.66361 18.577 3.77669 18.5809 3.88062 18.546C3.98454 18.511 4.07224 18.4394 4.12744 18.3447L10.0116 8.15112C10.0511 8.08237 10.0719 8.00444 10.0718 7.92514C10.0718 7.84583 10.0509 7.76792 10.0113 7.69921C9.97169 7.6305 9.91475 7.57341 9.84615 7.53361C9.77755 7.49382 9.69971 7.47271 9.6204 7.47244C8.166 7.47246 6.71184 7.47244 5.25746 7.47244L7.10628 0.568637C7.12478 0.499086 7.12644 0.426139 7.11112 0.355819C7.0958 0.285498 7.06394 0.219816 7.01819 0.164261C6.97244 0.108706 6.91411 0.0648473 6.84803 0.0363296C6.78195 0.00781201 6.71003 -0.00453445 6.63822 0.000285267Z" />
                                    </svg>

                                </span>
                                <span>Latest</span>
                            </li>
                            <li className='text-[#818181] !mb-0'>
                                <span className='w-[50px]'>
                                    <svg className='mx-auto' width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.0274 0.703184C22.0274 0.703184 19.0774 0.333252 12.7418 0.333252C6.61184 0.333252 3.52629 0.703184 3.52629 0.703184C2.7382 0.703478 1.98249 1.01576 1.42533 1.57135C0.868167 2.12695 0.555176 2.88038 0.555176 3.66596V14.7794C0.55503 15.1685 0.631764 15.5538 0.780998 15.9133C0.930231 16.2728 1.14904 16.5995 1.42493 16.8748C1.70083 17.15 2.0284 17.3683 2.38895 17.5174C2.7495 17.6664 3.13597 17.7432 3.52629 17.7433C3.52629 17.7433 6.39517 18.111 12.7418 18.111C19.0852 18.111 22.0274 17.7433 22.0274 17.7433C22.4179 17.7436 22.8046 17.6671 23.1654 17.5183C23.5262 17.3694 23.854 17.1511 24.1301 16.8758C24.4062 16.6005 24.6251 16.2736 24.7743 15.9139C24.9235 15.5542 25.0001 15.1687 24.9996 14.7794V3.66375C24.9996 3.27478 24.9227 2.88961 24.7733 2.53028C24.6239 2.17094 24.405 1.84447 24.1289 1.56953C23.8529 1.29459 23.5252 1.07656 23.1646 0.927908C22.8041 0.779256 22.4176 0.702893 22.0274 0.703184ZM9.51184 13.6242V4.82449L17.4385 9.22159L9.51184 13.6242Z" fill="#818181" />
                                    </svg>

                                </span>
                                <span>Most Popular</span>
                            </li>
                        </ul>
                        <h4 className='text-[#818181] text-[18px] my-2'>Events</h4>
                        <ul className='ml-4 [&>li]:mb-4 flex-col flex'>
                            {filters.map((filter) => (
                                <label key={filter} className="flex items-center mb-4 text-[#818181] cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="mr-2 w-6 h-6 border-[#818181] !accent-[#818181]"
                                        value={filter}
                                        onChange={(e) => handleFilterChange(e.target.value, e.target.checked)}
                                    />
                                    {filter}
                                </label>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-9/12 w-full">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {paginatedData.map((item) => (
                                <div className='relative rounded-lg overflow-hidden' key={item.id}>
                                    <div className='bg-black absolute left-0 top-0 w-full h-full inline-block bg-opacity-50'></div>
                                    <Image className='w-full' src={item.thumbnail} alt="video thumb" />
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
                                            <span className='bg-black bg-opacity-25 px-3 py-1 rounded-lg'>{item.duration}</span>
                                            <div className='flex justify-center items-center bg-black bg-opacity-25 px-3 py-1 rounded-lg'>
                                                <div>
                                                    <Eye />
                                                </div>
                                                <span className='ml-2'>
                                                    {item.views}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute bottom-5 left-5'>
                                        <h6 className='text-white text-opacity-75'>{item.type}</h6>
                                        <h4 className='text-white md:text-[26px] text-[20px] font-semibold truncate'>{item.title}</h4>
                                        <h6 className='text-white text-opacity-75'>{item.time}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className='flex gap-2 mt-4'>
                            {pageNumbers.map((pageNumber) => (
                                <li key={pageNumber}>
                                    <button className={`border w-10 h-10 flex items-center justify-center rounded-lg duration-300 hover:bg-white hover:text-black ${currentPage === pageNumber ? 'bg-white text-black' : ''}`} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

