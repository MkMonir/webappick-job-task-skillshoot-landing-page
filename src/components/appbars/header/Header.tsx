'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`w-full absolute top-6 z-50`}>
            <div className="container">
                <div className="flex items-center justify-between gap-12 w-full py-5 lg:py-0">
                    {/* LOGO */}
                    <Link href="#home">
                        <Image src="/assets/logo.svg" alt="Logo" width={128} height={36} />
                    </Link>

                    {/* MENU OPEN AND CLOSE BUTTON */}
                    <button
                        className="block lg:hidden text-4xl text-gray"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <MdOutlineClose /> : <HiOutlineMenuAlt3 />}
                    </button>

                    {/* NAVBAR START */}
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    {/* NAVBAR END */}

                    <div className='flex items-center gap-3'>
                        <button className='px-2 py-3 text-lg text-white'>Login</button>
                        <Button variant='secondary' path='#' className='!font-normal !px-11 text-lg rounded-lg'>Register</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
