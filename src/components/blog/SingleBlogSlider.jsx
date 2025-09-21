import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

// Project images for blog navigation
const blogNavImages = {
    previous: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=85&h=85&q=80', // Nexsys Abu Dhabi
    next: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=85&h=85&q=80'      // Smart building
};

const SingleBlogSlider = () => {
    return (
        <>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="blog-details-item">
                            <div className="blog-item-thumb">
                                <div style={{
                                    backgroundImage: `url("${blogNavImages.previous}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '85px',
                                    height: '85px',
                                    borderRadius: '8px'
                                }} />
                            </div>
                            <div className="blog-item-content">
                                <h4><Link href="#" onClick={handleSmoothScroll}>Smart Building Integration Solutions</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="blog-details-item two">
                            <div className="blog-item-thumb two">
                                <div style={{
                                    backgroundImage: `url("${blogNavImages.next}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '85px',
                                    height: '85px',
                                    borderRadius: '8px'
                                }} />
                            </div>
                            <div className="blog-item-content">
                                <h4><Link href="#" onClick={handleSmoothScroll}>Advanced BMS Automation</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogSlider;