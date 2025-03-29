import { SignInButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'

const SignIn = () => {
  return (
    <SignInButton mode='modal'>
      <Button className='text-sm font-semibold bg-shop_light_yellow hover:text-white hover:bg-shop_light_green text-shop_dark_green hover:cursor-pointer hoverEffect' >
        Login</Button>
    </SignInButton>
    )
}

export default SignIn