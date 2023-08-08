import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
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
            <div className='flex items-center gap-1'>
                <OrganizationSwitcher
                appearance={{
                    elements: {
                        organizationSwitcherTrigger: 'py-2 px-4 rounded-md text-light-1',
                    }
                }}
                />
                <div className='block md:hidden px-4'>
                    <SignedIn>
                        <SignOutButton>
                            <div className='flex cursor-pointer'>
                                <Image src='/assets/logout.svg' alt='logout.svg' width={20} height={20} />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
  )
}

export default Topbar