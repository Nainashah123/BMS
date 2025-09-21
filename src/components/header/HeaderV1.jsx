"use client"
import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/images/logos/nexsys-logo-transparent.png'
import HeaderTopBarV1 from './HeaderTopBarV1';
import Link from 'next/link';
import MainMenu from './MainMenu';
import HeaderSidebar from './HeaderSidebar';
import useStickyMenu from '@/src/hooks/useStickyMenu';
import MobileMenu from './MobileMenu';
import useSubMenuToggle from '@/src/hooks/useSubMenuToggle';
import useMobileSidebarMenu from '@/src/hooks/useMobileSidebarMenu';
import useSidebarInfo from '@/src/hooks/useSidebarInfo';

const HeaderV1 = () => {

    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } = useMobileSidebarMenu();
    const { isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useSidebarInfo()

    return (
        <>
            <HeaderTopBarV1 />
            <div className={`header-area ${isMenuSticky ? "sticky-nav" : ""}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="header-logo">
                                <Link href="/">
                                    <Image 
                                        src={logo} 
                                        alt="Nexsys Technologies LLC" 
                                        width={200} 
                                        height={60} 
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                            background: 'transparent',
                                            filter: 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(2077%) hue-rotate(356deg) brightness(101%) contrast(107%)'
                                        }}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="header-munu">
                                <MainMenu />
                                <div className="header-social">
                                    <ul>
                                        <li><Link href="https://wa.me/971506831025" target='_blank'><i className="fab fa-whatsapp"></i></Link></li>
                                        <li className="line"><Link className="navSidebar-button" href="#" onClick={handleSidebarOpen} scroll={false}><i
                                            className="bi bi-grid-3x3-gap-fill"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderSidebar isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} />
            <MobileMenu toggleSubMenu={toggleSubMenu} isMobileSidebarOpen={isMobileSidebarOpen} openMobileSidebar={openMobileSidebar} closeMobileSidebar={closeMobileSidebar} isMenuSticky={isMenuSticky} />
        </>
    );
};

export default HeaderV1;