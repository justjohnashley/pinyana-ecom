import React, { FC, use } from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useOutsideClick } from "@/hooks";
import SocialMedia from './SocialMedia'
interface SidebarProps {
    isOpen: boolean
    onClose: () => void
    }

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname()
  const siderbarRef = useOutsideClick<HTMLDivElement>(onClose)

  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
      <div ref={siderbarRef} className={`min-w-72 max-w-96 bg-shop_dark_green h-screen p-10 flex flex-col gap-6`}>
        <div className='flex items-center justify-between'>
          <Logo />
          <button onClick={onClose}>
            <X className='hover:text-shop_light_green hoverEffect' />
          </button>
        </div>

        <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>
          {headerData?.map((item) => (
            <Link href={item?.href} key={item?.title} className={`hover:text-shop_light_yellow hoverEffect 
            ${pathname === item?.href && 'text-shop_light_yellow'}`} onClick={onClose}>
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  )
}

export default SideMenu