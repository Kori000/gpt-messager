'use client'
import React, { useState } from 'react'
import NewChat from './NewChat'
import { motion, AnimatePresence } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Aavatar from './UserBox/Avatar'

import UserBox from './UserBox/UserBox'
const SideBar = () => {
  const { data: session } = useSession()

  return (
    <div className='p-2 flex flex-col h-screen '>
      <div className='flex-1 '>
        <div>
          <NewChat />

          {/* ModelSelection */}

          {/* Map through the ChatRows */}
        </div>
      </div>

      <div className='pb-2'>
        <UserBox></UserBox>
      </div>
    </div>
  )
}

export default SideBar
