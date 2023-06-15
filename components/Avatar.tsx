import * as Avatar from '@radix-ui/react-avatar'
import { useSession } from 'next-auth/react'
export default function Aavatar() {
  const { data: session } = useSession()
  return (
    <Avatar.Root className='bg-blackA3 inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle  '>
      <Avatar.Image
        className='h-full w-full rounded-[inherit] object-cover'
        src={session?.user?.image!}
        alt='User pic'
      />
      <Avatar.Fallback
        className='text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
        delayMs={100}
      >
        {session?.user?.name! || 'Anonymouse'}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
