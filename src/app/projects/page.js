import React from 'react';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ProjectV1 from '@/src/components/project/ProjectV1';
import ScrollingBanner from '@/src/components/banner/ScrollingBanner';

export const metadata = {
    title: "Projects - Nexsys Technologies LLC"
}

const Projects = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Our Projects" breadCrumb="projects" />
            <ProjectV1 />
            <ScrollingBanner />
            <FooterV1 />
        </>
    );
};

export default Projects;
