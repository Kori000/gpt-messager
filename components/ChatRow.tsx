import { db } from '@/firebase'
import { ChatBubbleIcon, TrashIcon } from '@radix-ui/react-icons'
import { collection, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

type Props = {
  id: string
}
const ChatRow = ({ id }: Props) => {
  const pathName = usePathname()
  const router = useRouter()

  const { data: session } = useSession()

  const [active, setActive] = useState<boolean>(false)

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
  )

  useEffect(() => {
    if (!pathName) return
    setActive(pathName.includes(id))
    return () => {}
  }, [pathName])

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow ${active && 'bg-gray-700/50'}`}
    >
      <ChatBubbleIcon className='w-5 h-5 '></ChatBubbleIcon>
      <p className='flex-1  sm:inline-flex truncate '>
        {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
      </p>
      <TrashIcon className='w-5 h-5 hover:text-white'></TrashIcon>
    </Link>
  )
}

export default ChatRow
