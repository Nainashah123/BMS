import Link from 'next/link';
import React from 'react';

const BreadCrumb = ({ title, breadCrumb }) => {
    return (
        <>
            <div className="breatcome-area" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=1920&h=411&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '411px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="breatcome-content">
                                <div className="breatcome-title">
                                    <h1>{title ? title : "Error Page"}</h1>
                                </div>
                                <div className="bratcome-text">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li>{breadCrumb ? breadCrumb : "404"}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;