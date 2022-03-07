import React from 'react'
import Teams from './teams'

export default function LeaderBoard({ data }) {
    return (
        <table>
            <thead className='bg-slate-300 text-black'>
                <tr className=''>
                    <th className='px-10 py-4'>#</th>
                    <th className='px-10'></th>
                    <th className='px-10'>Team Name</th>
                    <th className='px-10'>MP</th>
                    <th className='px-10'>W</th>
                    <th className='px-10'>D</th>
                    <th className='px-10'>L</th>
                    <th className='px-10'>GD</th>
                    <th className='px-10'>PTS</th>
                </tr>
            </thead>
            <tbody className='bg-white text-black'>
                {[...data].sort((a, b) => a.points > b.points ? -1 : 1).map((item, index) => (
                    <>
                        <Teams
                            item={item}
                            index={index}
                        />
                    </>
                ))}
            </tbody>
        </table>
    )
}
