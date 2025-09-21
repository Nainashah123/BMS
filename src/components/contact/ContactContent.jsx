"use client"
import React from 'react';
import ContactFormV2 from '../form/ContactFormV2';
import LocationMaps from '../utilities/LocationMaps';

const ContactContent = () => {
    return (
        <>
            <div className="contact-us-area">
                <div className="container">
                    <div className="row mb-150">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box">
                                <div className="contact-icon">
                                    <i className="bi bi-telephone-x"></i>
                                </div>
                                <div className="contact-content">
                                    <h4>Phone Number</h4>
                                    <span><a href="tel:+971506831025">+971 506831025</a></span>
                                    <span><a href="tel:0568103681">0568103681</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box">
                                <div className="contact-icon">
                                    <i className="bi bi-envelope-open"></i>
                                </div>
                                <div className="contact-content">
                                    <h4>E-mail</h4>
                                    <span><a href="mailto:info@nexsys.global">info@nexsys.global</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box two">
                                <div className="contact-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="contact-content">
                                    <h4>Address</h4>
                                    <span>Sharjah, UAE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row contact">
                        <div className="col-lg-6 col-md-12">
                            <div style={{
                                backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '400px',
                                borderRadius: '10px',
                                marginBottom: '30px'
                            }} alt="Professional BMS Team" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-box">
                                <div className="contact-title">
                                    <h2>Ready to Optimize Your</h2>
                                    <h2>Building Management?</h2>
                                </div>
                                <ContactFormV2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LocationMaps />
        </>
    );
};

export default ContactContent;