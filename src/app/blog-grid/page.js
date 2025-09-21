import React from 'react';
import BlogV2 from '@/src/components/blog/BlogV2';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ScrollingBanner from '@/src/components/banner/ScrollingBanner';

export const metadata = {
    title: "Blog Grid - Nexsys Technologies LLC"
}

const BlogGrid = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Blog Grid" breadCrumb="blog-grid" />
            <BlogV2 showFull={true} />
            <ScrollingBanner />
            <FooterV1 />
        </>
    );
};

export default BlogGrid;