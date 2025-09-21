import Image from 'next/image';
import React from 'react';

const SingleAboutV1 = ({ about }) => {
    const { thumb, title, text } = about

    return (
        <>
            <div className="about-single-box">
                <div className="about-icon">
                    {thumb.startsWith('http') ? (
                        <div style={{
                            backgroundImage: `url("${thumb}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '35px',
                            height: '35px',
                            borderRadius: '8px'
                        }} />
                    ) : (
                        <Image src={`/assets/images/about/${thumb}`} width={35} height={35} alt="image" />
                    )}
                </div>
                <div className="about-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleAboutV1;