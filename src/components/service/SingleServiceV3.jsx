import Image from 'next/image';
import React from 'react';

const SingleServiceV3 = ({ service }) => {
    const { id, animation, iconThumb, title, text, thumb, icon, serviceSpace } = service

    return (
        <>
            <div className={`service-items-box-two ${animation} ${serviceSpace}`}>
                <div className="service-icon-thumb">
                    <Image src={`/assets/images/service/${iconThumb}`} width={45} height={45} alt="image" />
                </div>
                <div className="service-items-title">
                    <h4>{title}</h4>
                </div>
                <div className="service-items-content-two">
                    <p>{text}</p>
                </div>
                <div className="service-items-thumb-two">
                    {thumb.startsWith('http') ? (
                        <div style={{
                            backgroundImage: `url("${thumb}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '275px',
                            height: '240px',
                            borderRadius: '10px'
                        }} />
                    ) : (
                        <Image src={`/assets/images/service/${thumb}`} width={275} height={240} alt="image" />
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;