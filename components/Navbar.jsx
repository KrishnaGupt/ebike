"use client"

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import {BiUser} from 'react-icons/bi'
import {BsCart2} from 'react-icons/bs'
import {MdMenu, MdOutlineClose} from 'react-icons/md'
export default function Navbar(){

    const [displayMenu, setDisplayMenu] = useState(false)
    const toggleNav = ()=>{
        if(displayMenu){
            setDisplayMenu(false)
        }else{
            setDisplayMenu(true)
        }
    }
    return(
        <div>
            <nav className="bg-[#121212] h-16 w-full text-white flex flex-row justify-between items-center 
            sm:pr-12 pr-0">
                <div>
                    <Link href={'/'} className='px-4'>Unicus Mobility</Link>
                </div>
                <div>
                    <ul className={`sm:flex text-sm 
                    ${displayMenu ? 'flex flex-col bg-[#121212] absolute w-full left-0 top-[62px] dropdown-menu' : 'hidden'}`}>
                        <Link href={'/Products/'} className={`mx-6 cursor-pointer ${displayMenu ? 'text-2xl my-4' : ''}`}>EBikes</Link>
                        <div className={`mx-6 flex cursor-pointer ${displayMenu ? 'text-2xl my-4 items-end' : ''}`}>
                            <Link href={'/#'}>Accessories</Link>
                        </div>
                        <Link href={'/about/'} className={`mx-6 cursor-pointer ${displayMenu ? 'text-2xl my-4' : ''}`}>About Us</Link>
                        <Link href={'/contact/'} className={`mx-6 cursor-pointer ${displayMenu ? 'text-2xl my-4' : ''}`}>Contact Us</Link>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <div className='user'>
                        <BiUser className='text-2xl sm:mx-4 mx-2'/>
                    </div>
                    <div className='cart'>
                        <BsCart2 className='text-2xl sm:mx-4 mx-2'/>
                    </div>
                <div className='block sm:hidden'>
                        <MdMenu onClick={toggleNav} className={`${displayMenu ? 'hidden' : 'block'} text-3xl mr-4 ml-2`}/>
                            <MdOutlineClose onClick={toggleNav} className={`${displayMenu ? 'block' : 'hidden'} text-3xl mr-4 ml-2`}/>
                </div>
                </div>
            </nav>
        </div>
    )
}