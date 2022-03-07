import React from 'react'
import Teams from './teams'

export default function LeaderBoard({ data }) {
    return (
        <table>
            <thead className='bg-slate-300 text-black'>
                <tr className=''>
                    <th className='px-6 py-2'>#</th>
                    <th className='px-6'></th>
                    <th className='px-6'>Team Name</th>
                    <th className='px-6'>MP</th>
                    <th className='px-6'>W</th>
                    <th className='px-6'>D</th>
                    <th className='px-6'>L</th>
                    <th className='px-6'>GD</th>
                    <th className='px-6'>PTS</th>
                </tr>
            </thead>
            {/* .sort((a, b) => a.item.timeM > b.item.timeM ? 1:-1). */}
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
