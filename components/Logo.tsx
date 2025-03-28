import { cn } from '@/lib/utils'
import Link  from 'next/link'
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
  <Link href={"/"}>
    <h2 className={cn("text-2xl text-shop_light_yellow font-black tracking-wider uppercase hover:text-shop_dark_green hoverEffect group font-sans",className)}>
        <span className='text-4xl text-shop_yellow group-hover:text-shop_light_green hoverEffect'>P</span>iñana
    </h2>
    </Link>
    
)
  
}

export default Logo