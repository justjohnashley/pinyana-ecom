import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return <header className="bg-yellow-100 py-5">
    <Container className='flex items-center justify-between'>
      <Logo />
      <HeaderMenu />
      <div>Others</div>
      </Container>
  </header>
    
}

export default Header