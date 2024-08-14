'use client';

import Link from 'next/link';
import { navItems } from './navData';

const Navbar = ({ menuOpen, setMenuOpen }: any) => {
    return (
        <nav
            // className={`flex flex-col lg:flex-row items-center lg:gap-10 gap-5 lg:relative absolute lg:top-0 top-[86px] left-0 bottom-0 lg:w-fit w-full lg:h-full h-screen rounded-md lg:bg-white bg-black bg-opacity-30 lg:bg-opacity-100 z-10 ${menuOpen
            //         ? 'opacity-100 visible translate-y-0'
            //         : 'opacity-0 -translate-y-full invisible lg:opacity-100 lg:visible lg:translate-y-0'
            //     } transition-all duration-500`}
            className={`flex flex-col lg:flex-row items-center lg:gap-10 gap-5 lg:relative absolute lg:top-0 top-[86px] left-0 bottom-0 lg:w-fit w-full lg:h-full h-screen z-10 ${menuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 -translate-y-full invisible lg:opacity-100 lg:visible lg:translate-y-0'
                } transition-all duration-500`}
        >
            {/* NAV LIST */}
            <ul className="flex flex-col lg:flex-row lg:items-center gap-[30px] bg-primary lg:bg-transparent w-full lg:w-fit px-[20px] lg:px-0 lg:border-opacity-100">
                {navItems?.map((item, i) => (
                    // NAV ITEM
                    <li key={i} className="relative">
                        {/* NAV LINK */}
                        <Link
                            href={`/${item.link}`}
                            className={`text-light-white text-lg leading-[35px] py-2 hover:text-white transition-all duration-500`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
