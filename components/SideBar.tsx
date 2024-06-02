"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'

const SideBar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className='sidebar'>
            <nav className="flex flex-col gap-4">
                <Link href="/" className='mb-12 flex items-center cursor-pointer gap-2'>
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='logo'
                        className='size-[24px] max-xl:size-14'
                    />
                    <h1 className="sidebar-logo font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                </Link>
                {sidebarLinks.map((item, idx) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return (
                        <Link
                            href={item.route}
                            key={idx}
                            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                        >
                            <div className='relative size-6'>
                                <Image
                                    src={item.imgURL}
                                    fill
                                    alt='icon'
                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                />
                            </div>
                            <p className={cn('sidbar-label text-black-2', { 'text-white': isActive })}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
            <Footer user={user} type='desktop' />
        </section>
    )
}

export default SideBar