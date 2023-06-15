'use client'
import React, { useState } from 'react'
import NewChat from './NewChat'
import { motion, AnimatePresence } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Aavatar from './Avatar'

import Dialog1 from './RadixComponents/Dialog'
const SideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
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
        {session && (
          <DropdownMenu.Root
            open={isDropdownOpen}
            onOpenChange={setIsDropdownOpen}
          >
            <DropdownMenu.Trigger className='chatRow bg-gray-400/5 w-full '>
              <div className='flex items-center justify-start space-x-4  '>
                <Aavatar></Aavatar>
                <p className='text-base '>
                  {session?.user?.name || 'Anonymouse'}
                </p>
              </div>
            </DropdownMenu.Trigger>

            <div className=' w-20 h-20 '></div>

            <AnimatePresence>
              {isDropdownOpen && (
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side='right'
                    align='end'
                    sideOffset={10}
                    className=' '
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.45
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8
                      }}
                      className='w-[180px] bg-[#121314] rounded-md shadow-2xl backdrop-blur-sm p-2 flex  flex-col gap-2 text-sm origin-bottom-left'
                    >
                      <DropdownMenu.Group className='flex flex-col gap-2 '>
                        <DropdownMenu.Item className='dropdown-btn '>
                          查看个人档案
                        </DropdownMenu.Item>
                        <Dialog1
                          username={session.user?.name}
                          email={session.user?.email}
                        >
                          <DropdownMenu.Item className='dropdown-btn '>
                            编辑个人档案
                          </DropdownMenu.Item>
                        </Dialog1>
                        <DropdownMenu.Item className='dropdown-btn '>
                          修改密码
                        </DropdownMenu.Item>
                      </DropdownMenu.Group>

                      <DropdownMenu.Separator className='bg-gray-500/50 h-px ' />

                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className='dropdown-btn  '>
                          静音服务器
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent
                          sideOffset={14}
                          className='bg-[#121314] px-2 py-2 rounded-md'
                        >
                          <DropdownMenu.Item className='group text-[13px] leading-none  rounded-[3px] flex items-center h-[28px] p-2 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none  data-[highlighted]:text-violet1 dropdown-btn-sub'>
                            Save Page As…
                            <div className='ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8'>
                              ⌘+S
                            </div>
                          </DropdownMenu.Item>
                          <DropdownMenu.Item className='text-[13px] leading-none rounded-[3px] flex items-center h-[28px] p-2 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none  data-[highlighted]:text-violet1  dropdown-btn-sub'>
                            Create Shortcut…
                          </DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Sub>

                      <DropdownMenu.Separator className='bg-gray-500/50 h-px ' />

                      <DropdownMenu.Group
                        className='text-red-400 dropdown-btn-danger '
                        onClick={() => signOut()}
                      >
                        <button
                          type='button'
                          className='font-semibold'
                        >
                          登出
                        </button>
                      </DropdownMenu.Group>
                    </motion.div>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              )}
            </AnimatePresence>
          </DropdownMenu.Root>
        )}
      </div>
    </div>
  )
}

export default SideBar
