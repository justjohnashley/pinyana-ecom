import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
    <Link href={"/cart"} className='group relative'>
          <Star className='w-6 h-6 text-shop_yellow hover:text-shop_light_green hoverEffect' />
          <span className='absolute -top-1 -right-1 bg-shop_yellow text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
    </Link>
  )
}

export default FavoriteButton