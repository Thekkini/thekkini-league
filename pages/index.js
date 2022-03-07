import LeaderBoard from "../components/leaderboard"

export default function Home() {
  const data = [
    {
      id: 1,
      name: 'Suvarnesh',
      clubname: 'FC Bayern München',
      clublogo: './images/FC_Bayern.png',
      played: '2',
      won: '1',
      drawn: '0',
      lost: '1',
      gd: '0',
      points: '3',
    },
    {
      id: 2,
      name: 'Sreemikil',
      clubname: 'Buriram United FC',
      clublogo: './images/buriram-united.png',
      played: '2',
      won: '1',
      drawn: '0',
      lost: '1',
      gd: '1',
      points: '3',
    },

    {
      id: 3,
      name: 'Pranav',
      clubname: 'FC Barcelona',
      clublogo: './images/FC_Barcelona.png',
      played: '2',
      won: '0',
      drawn: '0',
      lost: '2',
      gd: '-5',
      points: '0',
    },
    {
      id: 4,
      name: 'Akshay',
      clubname: 'AC Milan',
      clublogo: './images/AC_Milan.png',
      played: '2',
      won: '2',
      drawn: '0',
      lost: '0',
      gd: '4',
      points: '6',
    },
  ]
  return (
    <div style={{ backgroundImage: `url('./images/bg.jpg')` }} className="flex flex-col space-y-20 w-full h-screen object-cover bg-no-repeat text-white text-center items-center justify-center">
      <h1 className="text-6xl font-black">Thekkini League</h1>
      <LeaderBoard
        data={data}
      />
    </div>
  )
}
