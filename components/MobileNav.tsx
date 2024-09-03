"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()

    return (
        <section className='w-full max-w-[246px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={"/icons/hamburger.svg"}
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side={"left"} className='bg-slate-100'>
                    <SheetClose asChild>
                        <Link href={"/"} className=' flex cursor-pointer items-center gap-1 px-4'>
                            <Image
                                src={"/icons/logo.svg"}
                                width={34}
                                height={34}
                                alt='CBD logo'
                            />
                            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">CBD</h1>
                        </Link>
                    </SheetClose>

                    <div className="mobilenav-sheet">
                        <nav className="flex flex-col h-full gap-6 pt-16 text-white">
                            {sidebarLinks.map((items) => {
                                const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`)
                                return (
                                    <SheetClose asChild key={items.route}>
                                        <Link href={items.route} key={items.label} className={cn("mobilenav-sheet_close w-full", { "bg-bank-gradient": isActive })}>
                                                <Image
                                                    src={items.imgURL}
                                                    width={20}
                                                    height={20}
                                                    alt={items.label}
                                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                                />
                                            <p className={cn('text-16 font-semibold text-black-2', { "text-white": isActive })} >{items.label}</p>
                                        </Link>
                                    </SheetClose>
                                )
                                User
                            }
                            )}
                        </nav>
                        <footer>
                            
                        </footer>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav