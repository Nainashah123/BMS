
import React from 'react';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const CallToActionV1 = () => {
    return (
        <>
            <div className="call-do-action-area animate__slideInUp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="call-do-title">
                                <h2>Smart Building Management</h2>
                                <h2>Solutions Excellence</h2>
                                <p>Experience the future of building automation with our comprehensive BMS solutions. From HVAC control to energy optimization, we deliver intelligent systems that enhance efficiency and reduce costs.</p>
                                <div className="eulding-btn">
                                    <Link href="/contact" onClick={handleSmoothScroll}>Get Started <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="call-do-image">
                                <div style={{
                                    backgroundImage: 'url("https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '15px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                }} alt="Smart Building Management" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CallToActionV1;