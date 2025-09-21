import Image from 'next/image';
import React from 'react';

const SingleProjectV1 = ({ project }) => {
    const { id, projectClass, animation, thumb, title, subTitle, icon } = project

    return (
        <>
            <div className={`project-single-box ${projectClass} ${animation}`}>
                <div className="project-thumb">
                    {thumb.startsWith('http') ? (
                        <div style={{
                            backgroundImage: `url("${thumb}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '530px',
                            height: '640px',
                            borderRadius: '10px'
                        }} />
                    ) : thumb.startsWith('/assets/') ? (
                        <div style={{
                            backgroundImage: `url("${thumb}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '530px',
                            height: '640px',
                            borderRadius: '10px'
                        }} />
                    ) : (
                        <Image src={`/assets/images/project/${thumb}`} width={530} height={640} alt="image" />
                    )}
                    <div className="project-content">
                        <div className="project-text">
                            <h4>{title}</h4>
                            <span>{subTitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;