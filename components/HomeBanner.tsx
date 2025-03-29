import React from 'react'
import { Title } from './ui/text'
import Link from 'next/link'
import Image from 'next/image'
import banner_1 from '@/images/banner/banner_1.png' 

const HomeBanner = () => {
  return (
      <div className='py-16 md:py-0 bg-shop_normal_green rounded-lg px-10 lg:px-24 flex items-center justify-between'>
          <div className='space-y-5'>
              <Title className='text-white'>House of Pineapple Delicacies</Title>
              <Link href={"/shop"} className='bg-shop_dark_green/90 text-shop_light_yellow px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_light_yellow hoverEffect'>Buy Now</Link>
          </div>        
          <div>
              <Image src={banner_1} alt="Piñana Gourmet" className='hidden md:inline-flex w-96'/>
          </div>

    </div>
  )
}

export default HomeBanner