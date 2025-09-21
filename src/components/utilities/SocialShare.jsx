import Link from 'next/link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li><Link href="https://wa.me/971506831025" target='_blank'><i className="fab fa-whatsapp"></i></Link></li>
            <li><Link href="https://linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare;