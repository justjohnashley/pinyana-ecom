import React from 'react'
import { Clock, MapPin, Phone } from 'lucide-react';

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Main Branch",
    subtitle: "Calauan, Laguna",
    icon: (
      <MapPin className="h-6 w-6 text-shop_light_yellow group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Our Contact",
    subtitle: "+63 955 664 4881",
    icon: (
      <Phone className="h-6 w-6 text-shop_light_yellow group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Shop Hours",
    subtitle: "Mon - Sat: 9:00 AM - 6:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-shop_light_yellow group-hover:text-primary transition-colors" />
    ),
  },
  // {
  //   title: "Email Us",
  //   subtitle: "Shopcart@gmail.com",
  //   icon: (
  //     <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
  //   ),
  // },
];

const FooterTop = () => {
  return (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 border-b'>
          {data?.map((item, index) => (
              <div key={index} className='flex items-center gap-3 group hover:bg-shop_lighter_green p-4 transition-colors hoverEffect'>
                  {item?.icon}
                  <div>
                      <h3 className='font-semibold text-white group-hover:text-primary hoverEffect'> {item?.title} </h3>
                      <p className='text-white/60 text-sm mt-1 group-hover:text-gray-900 hoverEffect'> {item?.subtitle} </p>
              </div>
              </div>
          ))}
    </div>
  )
}



export default FooterTop