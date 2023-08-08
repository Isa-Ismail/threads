import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {}

const Topbar = () => {
    return (
        <nav className='topbar'>
            <Link className='flex items-center gap-4' href='/'>
                <Image src='/assets/logo.svg' alt='logo' width={50} height={50} />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
            </Link>
            <UserButton />
        </nav>
  )
}

export default Topbar