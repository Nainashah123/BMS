import React from 'react';
import HeaderV1 from '@/src/components/header/HeaderV1';
import BannerV1 from '@/src/components/banner/BannerV1';
import FeatureV1 from '@/src/components/feature/FeatureV1';
import AboutV1 from '@/src/components/about/AboutV1';
import ServiceV1 from '@/src/components/service/ServiceV1';
import TestimonialV1 from '@/src/components/testimonial/TestimonialV1';
import BlogV1 from '@/src/components/blog/BlogV1';
import ScrollingBanner from '@/src/components/banner/ScrollingBanner';
import FooterV1 from '@/src/components/footer/FooterV1';

export const metadata = {
  title: "Home - Nexsys Technologies LLC"
}

const HomePage = () => {
  return (
    <>
      <HeaderV1 />
      <BannerV1 />
      <FeatureV1 />
      <AboutV1 />
      <ServiceV1 />
      <TestimonialV1 />
      <BlogV1 />
      <ScrollingBanner />
      <FooterV1 />
    </>
  );
}

export default HomePage