import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleFeatureV1 = ({ feature }) => {
    const { activeClass, featureNumber, thumb, titleFirst, titleLast, icon } = feature

    return (
        <>
            <div className={`feature-single-box ${activeClass}`}>
                <div className="feature-content">
                    <div className={`feature-icon-thumb ${featureNumber}`}>
                        {thumb.startsWith('http') ? (
                            <div style={{
                                backgroundImage: `url("${thumb}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '65px',
                                height: '65px',
                                borderRadius: '10px'
                            }} />
                        ) : (
                            <Image src={`/assets/images/resource/${thumb}`} width={65} height={65} alt="feature1" />
                        )}
                    </div>
                    <div className={`feature-title ${featureNumber}`}>
                        <h4><Link href="#" onClick={handleSmoothScroll}>{titleFirst}</Link></h4>
                        <h4><Link href="#" onClick={handleSmoothScroll}>{titleLast}</Link></h4>
                    </div>
                    <div className={`feature-icon ${featureNumber}`}>
                        <Link href="#" onClick={handleSmoothScroll}><i className={icon}></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV1;