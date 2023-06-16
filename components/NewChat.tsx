import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' // 别用错了 👿别用这个: 'next/router'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
function NewChat() {
  const router = useRouter()
  const { data: session } = useSession()
  const createNewChat = async () => {
    // addDoc(collection(数据库, 表, 文档名, 字段名, 文档名), {
    //   message: [],
    //   userId: session?.user?.email!,
    //   createAt: serverTimestamp()
    // })
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      messages: [],
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    })

    console.log(doc)
    router.push(`/chat/${doc.id}`)
  }

  return (
    <div
      className='border-gray-300/30 border chatRow'
      onClick={() => createNewChat()}
    >
      <PlusIcon className='w-4 h-4 text-white '></PlusIcon>
      <div>New Chat</div>
    </div>
  )
}

export default NewChat
