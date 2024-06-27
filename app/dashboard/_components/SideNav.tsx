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
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center'>
        <Image src={"/logo.svg"} alt='logo' width={120} height={100} />
      </div>

      <div className='mt-10'>
        {MenuList.map((menu, index) => (
          <div
            key={index}
          >

            <Link href={menu.path}
              className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer 
              ${router === menu.path ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
            >
              <menu.icon />
              <h2>{menu.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
