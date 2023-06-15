import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
const NewChat = () => {
  return (
    <div className='border-gray-300/30 border chatRow'>
      <PlusIcon className='w-4 h-4 text-white '></PlusIcon>
      <div>New Chat</div>
    </div>
  )
}

export default NewChat
