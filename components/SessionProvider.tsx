'use client'

import { Session } from 'next-auth'

import { SessionProvider as Provider } from 'next-auth/react'

type Props = {
  children: React.ReactNode
  seesion: Session | null
}
const SessionProvider = ({ children, seesion }: Props) => {
  return <Provider session={seesion}>{children}</Provider>
}

export default SessionProvider
