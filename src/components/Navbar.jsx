﻿"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import menuIcon from '/public/images/hamburgerMenu.png';
import closeIcon from '/public/images/closeMenu.svg';
import Link from "next/link";


const NavBar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [menuIconSrc, setMenuIconSrc] = useState(menuIcon);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        // Toggle menu icon based on dropdown visibility
        if (isDropdownVisible) {
            setMenuIconSrc(menuIcon);
        } else {
            setMenuIconSrc(closeIcon);
        }
    };

    return (
        <nav className="bg-white fixed top-0 left-0 w-full z-10  ">
            <div className="py-14 px-8 lg:p-14 flex items-center justify-between lg:mx-[10%]  2xl:mx-[20%]">
                <div className="text-black text-xl font-semibold whitespace-nowrap"><a href="/">Celeste Lu</a></div>
                <div className="hidden lg:flex space-x-10 text-black text-xl *: ">
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}>
                        <Link passHref={true} href={"/"}>Work</Link>
                    </div>
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}>
                        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}><
                        Link passHref={true} href={"/about"}>About</Link>
                    </div>
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}>
                        <Link passHref={true} href={"/fun"}>Fun</Link>
                    </div>
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}>
                        <a href="mailto:celestechanglu@gmail.com">Contact</a>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        onClick={toggleDropdown}
                        className="text-black text-xl"
                    >
                        <Image src={menuIconSrc} alt="Menu Icon" width={24} height={24} />
                    </button>
                </div>
            </div>
            {/* Dropdown menu items for smaller screens */}
            <div
                className={`lg:hidden fixed inset-0 bg-white transition-max-height duration-500 ease-in-out overflow-hidden ${isDropdownVisible ? 'max-h-screen' : 'max-h-0'}`}
                style={{top: '5.5rem'}}
            >
                <div className="mt-[25%] flex flex-col items-center h-full text-black *:text-2xl *:font-bold *:py-8">
                    <div><Link passHref={true} href={"/"}>Work</Link></div>
                    <div><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
                    <div><Link passHref={true} href={"/about"}>About</Link></div>
                    <div><Link passHref={true} href={"/fun"}>Fun</Link></div>
                    <div><a href="mailto:celestechanglu@gmail.com">Contact</a></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
