"use client"
import React from 'react'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideNav = () => {
  const router = usePathname();


  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ]

  return (
    <div className='h-screen py-4 shadow-sm border'>
      <div className='flex justify-center'>
        <Image src={"/logo.svg"} alt='logo' width={80} height={80} />
      </div>
      <hr className='my-6' border />
      <div className='px-5 mt-3'>
        {MenuList.map((menu, index) => (
          <div
            key={index}
          >

            <Link href={menu.path}
              className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center 
              ${router === menu.path ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
            >
              <menu.icon  className='w-6 h-6'/>
              <h2 className='text-lg'>{menu.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
