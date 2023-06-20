'use client'
import React, { useState } from 'react'
import NewChat from './NewChat'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, getFirestore, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'

import UserBox from './UserBox/UserBox'
import ChatRow from './ChatRow'
import ModelSelection from './ModelSelection'

const SideBar = () => {
  const { data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'chats'),
        orderBy('createdAt', 'asc')
      )
  )

  return (
    <div className='p-2 flex flex-col h-screen '>
      <div className='flex-1 '>
        <div>
          <NewChat />

          {/* ModelSelection */}
          <div className='hidden sm:inline '>
            <ModelSelection></ModelSelection>
          </div>

          <div className='flex flex-col my-2 space-y-2 '>
            {loading && (
              <div className='animate-pulse text-center text-sm '>
                <p>Loading Chats...</p>
              </div>
            )}
            {/* Map through the ChatRows */}
            {chats?.docs.map(chat => (
              <ChatRow
                key={chat.id}
                id={chat.id}
              ></ChatRow>
            ))}
          </div>
        </div>
      </div>

      <div className='pb-2'>
        <UserBox></UserBox>
      </div>
    </div>
  )
}

export default SideBar
