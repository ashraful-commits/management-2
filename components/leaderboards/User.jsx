import React from 'react'
import Image from 'next/image';

export default function User(props) {
    const user = props.user
    return (
        <div className='flex items-center'>
            <Image className='rounded-xl border-4 border-[#44444F]' src={user.original.imgUrl} alt="thumb" width="50" height="50" />
            <span className='font-semibold ml-3 text-lg'>
                {user.original.eventName}
            </span>
        </div>
    )
}
