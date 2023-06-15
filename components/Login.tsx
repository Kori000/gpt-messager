'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  const session = useSession()
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col justify-center items-center text-center '>
      <Image
        src='https://links.papareact.com/2i6'
        width={300}
        height={300}
        alt='logo'
      ></Image>

      <button
        onClick={() => {
          signIn()
        }}
        className=' font-bold text-3xl animate-pulse  '
      >
        Sign In to use ChatGPT
      </button>

      <button
        onClick={() => signOut()}
        className=' font-bold text-3xl animate-pulse  '
      >
        Sign Out
      </button>
    </div>
  )
}

export default Login
