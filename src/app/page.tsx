import Image from 'next/image'
import { getServerSession } from 'next-auth'

export default async function Home() {

  const session = await getServerSession();


  return (
    <>
      getserverSession Result
      {
        session?.user?.name ? (
          <>
          <div>{session?.user?.name}</div>
          <img className=' w-20 h-20 rounded-full'  src={session?.user?.image} alt="" />
          </>
        ) : (
          <div>Not logged in</div>
        )
      }
    </>
  )
}
