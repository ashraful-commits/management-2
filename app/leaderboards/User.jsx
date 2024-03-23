import React from 'react'
import Image from 'next/image';

export default function User(props) {
    const user = props.user
    return (
        <div className='flex items-center'>
            <Image className='rounded-full border-2 border-white' src={user.original.imgUrl} alt="thumb" width="50" height="50" />
            <span className='font-semibold ml-3 text-lg'>
                {user.original.name}
            </span>
        </div>
    )
}
