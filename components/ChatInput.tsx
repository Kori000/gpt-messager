'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
type Props = {
  ChatId: string
}
const ChatInput = ({ ChatId }: Props) => {
  const [prompt, setPrompt] = useState('213')
  const { data: session } = useSession()
  return (
    <div className='bg-[#40414F] mx-4 text-gary-400 rounded-xl shadow-xs text-base border border-black/10'>
      <form
        className='p-5 space-x-5 flex'
        action=''
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
