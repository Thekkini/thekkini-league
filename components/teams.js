import React from 'react'

export default function Teams({ item }) {
    return (
        <tr key={item.id} className="">
            <td>{item.id}</td>
            <td className='flex justify-center pr-4'><img src={item.clublogo} alt={item.clubname} className="w-auto h-10" /></td>
            <td className='items-start text-left uppercase'>
                {item.clubname}
            </td>
            <td>{item.played}</td>
            <td>{item.won}</td>
            <td>{item.drawn}</td>
            <td>{item.lost}</td>
            <td>{item.gd}</td>
            <td>{item.points}</td>
        </tr>

    )
}