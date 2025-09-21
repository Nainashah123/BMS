import React from 'react';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import ContactContent from '@/src/components/contact/ContactContent';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ScrollingBanner from '@/src/components/banner/ScrollingBanner';

export const metadata = {
    title: "Contact - Nexsys Technologies LLC"
}

const Contact = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Contact Us" breadCrumb="contact" />
            <ContactContent />
            <ScrollingBanner />
            <FooterV1 />
        </>
    );
};

export default Contact;