import Image from 'next/image';
import React from 'react';
import sliderThumb from '@/./public/assets/images/slider/slider-thumb.png'
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BannerV1 = () => {
    return (
        <>
            <div className="slider-area d-flex align-items-center" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="slider-content animate__animated animate__slideInLeft">
                                <div className="slider-sub-title">
                                    <h4>NexSys Technologies LLC</h4>
                                </div>
                                <div className="slider-main-title">
                                    <h1>Building Management</h1>
                                    <h1>Solutions</h1>
                                </div>
                                <div className="slider-discripton">
                                    <p>Founded in 2025, NexSys Technologies LLC is a reputable and experienced system integrator, delivering innovative, high-quality, and economically oriented integrated building management solutions.</p>
                                    <p>Our BMS services include advanced HVAC automation, smart lighting control systems, integrated security management, and comprehensive energy optimization solutions.</p>
                                    <p>We specialize in transforming buildings into intelligent, efficient, and sustainable environments through cutting-edge automation and control technologies.</p>
                                </div>
                                <div className="eulding-btn">
                                    <Link href="#" onClick={handleSmoothScroll}>Read More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="slider-image-carousel animate__animated animate__slideInRight">
                                <div className="carousel-container" style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '500px',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                                }}>
                                    <div className="hotel-image" style={{
                                        backgroundImage: 'url("https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '100%',
                                        height: '100%',
                                        animation: 'fadeInOut 8s infinite'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '20px',
                                            background: 'rgba(255,107,53,0.9)',
                                            color: 'white',
                                            padding: '10px 20px',
                                            borderRadius: '25px',
                                            fontSize: '14px',
                                            fontWeight: '600'
                                        }}>
                                            Dubai Luxury Hotel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;