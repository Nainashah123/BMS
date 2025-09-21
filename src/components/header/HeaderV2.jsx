"use client"

import React from 'react';
import logo from '@/public/assets/images/logos/nexsys-logo-transparent.png'
import Image from 'next/image';
import Link from 'next/link';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import useStickyMenu from '@/src/hooks/useStickyMenu';
import useMobileSidebarMenu from '@/src/hooks/useMobileSidebarMenu';
import useSubMenuToggle from '@/src/hooks/useSubMenuToggle';

const HeaderV2 = ({ headerClass }) => {

    const toggleSubMenu = useSubMenuToggle();
    const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } = useMobileSidebarMenu();
    const isMenuSticky = useStickyMenu();

    return (
        <>
            <div className={`header-area style-two ${headerClass} ${isMenuSticky ? "sticky-menu" : ""}`} id="navbar">
                <div className="container-fluid p-90">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="header-logo">
                                <Link href="/"><Image src={logo} alt="Nexsys Technologies LLC" width={200} height={60} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="header-munu style-two">
                                <MainMenu />
                                <div className="header-social style-two">
                                    <ul>
                                        <li className="upper">
                                            <Link href="https://wa.me/971506831025" target='_blank'><i className="fab fa-whatsapp"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-call-section">
                                    <div className="header-call-icon">
                                        <i className="bi bi-telephone-plus"></i>
                                    </div>
                                    <div className="header-call-title">
                                        <span>Need help?  Call us: </span>
                                        <span><a href="tel:+971506831025">+971 506831025</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu toggleSubMenu={toggleSubMenu} isMobileSidebarOpen={isMobileSidebarOpen} openMobileSidebar={openMobileSidebar} closeMobileSidebar={closeMobileSidebar} isMenuSticky={isMenuSticky} />
        </>
    );
};

export default HeaderV2;