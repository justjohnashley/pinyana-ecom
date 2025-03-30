import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubtTitle } from './ui/text'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className='bg-shop_light_green border-t border-shop_light_green'>
    <Container>
        <FooterTop />
        <div className='bg-shop_light_green py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8'>
          <div className='space-y-4'>
            <Logo />
            <SubText>Piñana Gourmet, the first pineapple delicacy house in Calauan, Laguna.</SubText>
            <SocialMedia />
          </div>
          <div>
            <SubtTitle>Quick Links</SubtTitle>
            <ul className='space-y-3 mt-4'>
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link href={item?.href} className='text-white/80 text-sm hover:text-shop_normal_green transition-colors'>
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubtTitle>Product Categories</SubtTitle>
            <ul className='space-y-3 mt-4'>
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link href={`/category/${item?.href}`} className='text-white/80 text-sm hover:text-shop_normal_green transition-colors'>
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='space-y-4'>
            <SubtTitle>Want to be a Retailer?</SubtTitle>
            <SubText>Enter your email to get started!</SubText>
            <form className='space-y-3'>
              <Input placeholder="Enter email" type="email" required className='text-white border-shop_light_yellow placeholder:text-shop_lightest_yellow-80' />
              <Button className='w-full bg-shop_dark_green hover:bg-shop_light_yellow hover:text-shop_dark_green hoverEffect'>Submit</Button>
            </form>
          </div> */}
          
        </div>
        <div className="py-6 border-t text-center text-sm text-white/70">
          <div className="flex justify-center items-center gap-1">
          © {new Date().getFullYear()}
          <span className='font-bold text-shop_light_yellow'>Piñana Gourmet Food Products.</span>
           <span>All rights reserved.</span>
  </div>
</div>

    </Container>
  </footer>
  )
  
}

export default Footer