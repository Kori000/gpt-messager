'use client'

import { db } from '@/firebase'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
type Props = {
  chatId: string
}
const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState('')
  const { data: session } = useSession()

  // TODO: 通过 useSWR 获取 模型
  const model = 'tetx-davinci-003'

  async function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!prompt) return
    const input = prompt.trim()
    setPrompt('')

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?background=random&color=fff&name=${session?.user?.name}`
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )

    const notification = toast.loading('ChatGPT is thinking...')

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session
      })
    }).then(() => {
      toast.success('ChatGPT has responded!', { id: notification })
    })
  }
  return (
    <div className='bg-[#40414F] mx-4 text-gary-400 rounded-xl shadow-xs text-base border border-black/10'>
      <form
        className='p-5 space-x-5 flex'
        onSubmit={sendMessage}
      >
        <input
          type='text'
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          disabled={!session}
          className='focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
          placeholder='Type your message here...'
        />

        <button
          disabled={!session || !prompt}
          type='submit'
          className='enabled:bg-[#00ba76] p-2 rounded-md text-white font-bold disabled:text-gray-300/40 disabled:cursor-not-allowed duration-200 ease-in-out '
        >
          <PaperAirplaneIcon className='w-5 h-5 '></PaperAirplaneIcon>
        </button>
      </form>

      <div>{/* ModalSelection */}</div>
    </div>
  )
}

export default ChatInput
