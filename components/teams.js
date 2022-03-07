
export default function Teams({ item, index }) {
    return (
        <tr key={item.id} className="p-6">
            <td>{index + 1}</td>
            <td className='flex justify-center pr-4 py-4'>
                <img src={item.clublogo} alt={item.clubname} className="w-auto h-10" />
            </td>
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
