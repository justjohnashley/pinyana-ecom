import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link  from 'next/link'
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
  <Link href={"/"} className={cn("relative flex items-center gap-2 group w-32 h-12", className)}>
    {/*<h2 className={cn("text-2xl text-shop_light_yellow font-black tracking-wider uppercase hover:text-shop_dark_green hoverEffect group font-sans",className)}>
        <span className='text-4xl text-shop_yellow group-hover:text-shop_light_green hoverEffect'>P</span>iñana
    </h2>*/}

     {/* Default Image */}
     <Image
        src="/images/web-yellow.png"
        alt="Piñana"
        fill
        className={cn("absolute inset-0 w-full h-full object-contain hoverEffect opacity-100 group-hover:opacity-0",className)}
      />

      {/* Hover Image */}
      <Image
        src="/images/web-green.png"
        alt="Piñana Gourmet"
        fill
        className={cn("absolute inset-0 w-full h-full object-contain hoverEffect opacity-0 group-hover:opacity-100",className)}
      />
    </Link>
    
)
  
}

export default Logo