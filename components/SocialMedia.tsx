
import React from 'react'
import { PiFacebookLogoFill, PiInstagramLogoFill, PiTiktokLogoFill } from "react-icons/pi";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "./ui/tooltip";
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
      title: "Instagram",
      href: "https://www.instagram.com/pinyana.gourmet",
      icon: <PiInstagramLogoFill className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/pinyanagourmet/",
      icon: <PiFacebookLogoFill className="w-5 h-5" />,
    },
    {
      title: "Tiktok",
      href: "https://www.tiktok.com/@pinyanagourmet",
      icon: <PiTiktokLogoFill className="w-5 h-5" />,
    },
];
  


const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return <TooltipProvider>
      <div className={cn("flex gap-3.5", className)}>
          {socialLink?.map((item) => (
              <Tooltip key={item?.title}>
                  <TooltipTrigger asChild>
                      <Link
                          key={item?.title}
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item?.href}
                          className={cn("p-2 border rounded-full border-shop_light_yellow text-shop_light_yellow hover:bg-shop_light_yellow hover:text-shop_dark_green hoverEffect", iconClassName)}>
                          {item?.icon}
                      </Link>
                  </TooltipTrigger>
                  <TooltipContent className={cn("ClassValue[]): string text-shop_dark_green bg-shop_light_yellow font-semibold", tooltipClassName)}>
                      {item?.title}
                  </TooltipContent>
            </Tooltip>))}
          </div>
      </TooltipProvider>
  
}

export default SocialMedia