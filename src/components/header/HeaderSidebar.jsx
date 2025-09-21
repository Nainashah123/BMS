import React from 'react';
import SocialShare from '../utilities/SocialShare';
import logo from '@/public/assets/images/logos/nexsys-logo-transparent.png'
import Image from 'next/image';
import Link from 'next/link';

const HeaderSidebar = ({ isSidebarOpen, handleSidebarClose }) => {
    return (
        <>
            <div className={`sidebar-group info-group ${isSidebarOpen? "isActive": ""}`} >
                <div className="sidebar-widget">
                    <div className="sidebar-widget-container">
                        <div className="widget-heading">
                            <Link href="#" className="close-side-widget" onClick={handleSidebarClose} scroll={false}>
                                <i className="bi bi-x-lg"></i>
                            </Link>
                        </div>
                        <div className="sidebar-textwidget">
                            <div className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="sidebar-logo">
                                        <Link href="/"><Image src={logo} alt="Nexsys Technologies LLC" width={180} height={54} /></Link>
                                    </div>
                                    <div className="about-box">
                                        <h2>About Us</h2>
                                        <p className="text">Nexsys Technologies LLC provides comprehensive technology solutions and building maintenance services, offering software development, facility management, and professional maintenance services to businesses worldwide.</p>
                                    </div>
                                    <div className="contact-info">
                                        <h2>Contact Info</h2>
                                        <ul className="list-style-one">
                                            <li><i className="bi bi-geo-alt-fill"></i>Sharjah, UAE</li>
                                            <li><i className="bi bi-telephone-fill"></i><a href="tel:+971506831025">+971 506831025</a></li>
                                            <li><i className="bi bi-envelope"></i> <a href="mailto:info@nexsys.global">info@nexsys.global</a></li>
                                            <li><i className="bi bi-alarm-fill"></i> Business Hours: 9:00 AM to 6:00 PM
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="social-box">
                                        <SocialShare />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;