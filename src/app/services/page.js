import React from 'react';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ServiceV3 from '@/src/components/service/ServiceV3';
import ScrollingBanner from '@/src/components/banner/ScrollingBanner';

export const metadata = {
    title: "Services - Nexsys Technologies LLC"
}

const Services = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Service Page" breadCrumb="services" />
            <ServiceV3 showFull={true} />
            <ScrollingBanner />
            <FooterV1 />
        </>
    );
};

export default Services;