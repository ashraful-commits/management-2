import React from 'react'

function getStatusColor(status) {
    switch (status) {
        case 'Completed':
            return 'green-500';
        case 'In Progress':
            return 'yellow-500';
        case 'Upcoming':
            return 'blue-500';
        default:
            return 'gray';
    }
}


export default function Status(props) {
    const data = props.data
    return (
        <div className={`text-${getStatusColor(data)} rounded-full text-lg py-2 bg-opacity-25`}>
            {data}
        </div>
    )
}
