import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import React from 'react'
import '../globals.css'

export const metadata = {
    title: 'Threads App',
    description: 'Generated by create next app'
}

const inter = Inter({subsets: ['latin']})

interface Props {
    children: React.ReactNode
}

const layout: React.FC<Props> = ({children}) => {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
            {children}
        </ClerkProvider>
    )
}

export default layout