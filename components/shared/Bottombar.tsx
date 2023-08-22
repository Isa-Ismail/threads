'use client'
import { sidebarLinks } from '@/constant'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

interface Props {}

const Bottombar = () => {

  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {
          sidebarLinks.map(link => {
            const isActive = (
              pathname===(link.route)
            )
            return (
              <Link className={`leftsidebar_link ${isActive&&'bg-primary-500'}`} href={link.route} key={link.route}>
              <Image
                src={link.imgURL} 
                alt={link.label}
                width={24}
                height={24}
              />
                <p className={`text-light-1 max-lg:hidden`}>
                {link.label}
              </p>
            </Link>
          )})
        }
      </div>
    </section>
  )
}

export default Bottombar