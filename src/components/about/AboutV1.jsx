import Image from 'next/image'
import React from 'react'
import AboutV1Content from './AboutV1Content'

const AboutV1 = ({ aboutClass }) => {
    return (
        <>
            <div className={`about-area animate__animated animate__slideInUp ${aboutClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-thumb animate__animated animate__slideInUp">
                                <Image 
                                    src="/assets/images/about/about.jpg" 
                                    alt="Building Management System" 
                                    width={800}
                                    height={550}
                                    style={{
                                        width: '100%',
                                        height: '550px',
                                        objectFit: 'cover',
                                        borderRadius: '10px'
                                    }} 
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <AboutV1Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;