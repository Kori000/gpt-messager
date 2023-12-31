import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useSession } from 'next-auth/react'
type Prop = {
  children?: React.ReactNode
  username: string | null | undefined
  email: string | null | undefined
  open: boolean
  onOpenChange: (open: boolean) => void
}
const DialogEditProfile = ({ children, username, email, open, onOpenChange }: Prop) => {
  const { update, data } = useSession()
  const [usernameValue, setUsernameValue] = useState<Prop['username']>(username)
  const [emailValue, setEmailValue] = useState<Prop['email']>(email)
  async function updateProfile() {
    console.log('updateProfile', usernameValue, emailValue)
    console.log(data)
  }
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          <Dialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>
            编辑个人档案
          </Dialog.Title>
          <Dialog.Description className='text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal'>
            在这里更改您的配置文件。完成后点击保存更改。
          </Dialog.Description>
          <fieldset className='mb-[15px] flex items-center gap-5'>
            <label
              className='text-violet11 w-[90px] text-right text-[15px]'
              htmlFor='username'
            >
              用户名
            </label>
            <input
              className='text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
              id='username'
              onChange={e => {
                setUsernameValue(e.target.value)
              }}
              value={usernameValue!}
            />
          </fieldset>
          <fieldset className='mb-[15px] flex items-center gap-5'>
            <label
              className='text-violet11 w-[90px] text-right text-[15px]'
              htmlFor='email'
            >
              邮箱
            </label>
            <input
              className='text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
              id='email'
              onChange={e => {
                setEmailValue(e.target.value)
              }}
              value={emailValue!}
            />
          </fieldset>
          <div className='mt-[25px] flex justify-end'>
            <Dialog.Close asChild>
              <button
                onClick={() => {
                  updateProfile()
                }}
                className='bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'
              >
                保存更改
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
              aria-label='Close'
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { DialogEditProfile }
