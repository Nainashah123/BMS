import React from 'react';
import BlogStandardContent from '@/src/components/blog/BlogStandardContent';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ScrollingBanner from '@/src/components/banner/ScrollingBanner';

export const metadata = {
    title: "Blog Standard - Nexsys Technologies LLC"
}

const BlogStandard = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Blog Standard" breadCrumb="blog-standard" />
            <BlogStandardContent />
            <ScrollingBanner />
            <FooterV1 />
        </>
    );
};

export default BlogStandard;