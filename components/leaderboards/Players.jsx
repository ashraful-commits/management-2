import Image from 'next/image'
import React from 'react'

export default function Players(props) {
    const players = props.data
    const playerList = players.original.players
    return (
        <div className='inline-block'>
            <div className='flex -space-x-2.5 items-center'>
                {playerList.map((player, index) => (
                    <>
                        <Image className='rounded-full border-[3px]' src={player.image} width={40} height={40} alt='thumb' />
                    </>
                ))}
            </div>
            <span className='text-center block'>+23 others</span>
        </div>
    )
}
