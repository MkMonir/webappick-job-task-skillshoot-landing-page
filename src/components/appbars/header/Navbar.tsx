'use client';

import Link from 'next/link';
import { navItems } from './navData';
import { twMerge } from 'tailwind-merge';

const Navbar = ({ menuOpen, setMenuOpen }: any) => {
    return (
        <nav
            className={twMerge("flex flex-col lg:flex-row items-center lg:gap-10 gap-5 lg:relative absolute lg:top-0 top-full left-0 bottom-0 lg:w-fit w-full lg:h-full h-screen z-10 transition-all duration-500",
                menuOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 -translate-y-full invisible lg:opacity-100 lg:visible lg:translate-y-0')
            }
        >
            {/* NAV LIST */}
            < ul className="flex flex-col lg:flex-row lg:items-center gap-[30px] bg-white lg:bg-transparent w-full lg:w-fit px-[50px] lg:px-0 py-5 lg:py-0 lg:border-opacity-100" >
                {navItems?.map((item, i) => (
                    // NAV ITEM
                    <li key={i} className="relative">
                        {/* NAV LINK */}
                        <Link
                            href={`/${item.link}`}
                            className={`lg:text-light-white text-gray text-lg leading-[35px] py-2 lg:hover:text-white transition-all duration-500`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul >
        </nav >
    );
};

export default Navbar;
