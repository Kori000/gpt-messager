import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React, { useState, useEffect } from 'react'

type Props = {
  params: {
    id: string
  }
}
const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className='flex flex-col h-screen overflow-hidden pb-4'>
      <Chat chatId={id}></Chat>
      <ChatInput chatId={id}></ChatInput>
    </div>
  )
}

export default ChatPage
