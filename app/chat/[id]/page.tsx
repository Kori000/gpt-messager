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
    <div className='flex flex-col h-screen overflow-hidden'>
      <Chat ChatId={id}></Chat>
      <ChatInput ChatId={id}></ChatInput>
    </div>
  )
}

export default ChatPage
