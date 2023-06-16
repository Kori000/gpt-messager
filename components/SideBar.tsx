'use client'
import React, { useState } from 'react'
import NewChat from './NewChat'
import { motion, AnimatePresence } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Aavatar from './UserBox/Avatar'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, getFirestore, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'

import UserBox from './UserBox/UserBox'
import ChatRow from './ChatRow'

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

          {/* Map through the ChatRows */}
          {chats?.docs.map(chat => (
            <ChatRow
              key={chat.id}
              id={chat.id}
            ></ChatRow>
          ))}
        </div>
      </div>

      <div className='pb-2'>
        <UserBox></UserBox>
      </div>
    </div>
  )
}

export default SideBar
