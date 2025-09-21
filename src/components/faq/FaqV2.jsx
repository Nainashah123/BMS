import React from 'react';
import SingleFaqV1 from './SingleFaqV1';
import FaqV1Data from '../../../public/assets/jsonData/faq/FaqV1Data.json'

const FaqV2 = () => {
    return (
        <>
            <div className="faq-area style-two animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-content">
                                <div className="section-title">
                                    <div className="section-sub-title faq">
                                        <h4>Frequently Asked Questions</h4>
                                    </div>
                                    <div className="section-main-title faq">
                                        <h2>Questions & Answers</h2>
                                    </div>
                                    <div className="faq-discripition">
                                        <p>Get answers to common questions about our Building Management Systems, implementation process, maintenance services, and support options. Our BMS solutions are designed to optimize your building&apos;s performance and efficiency.</p>
                                    </div>
                                </div>
                                <div className="tab_container animate__animated animate__slideInUp">
                                    <div className="accordion" id="accordionExample">
                                        {FaqV1Data.map(faq =>
                                            <SingleFaqV1 faq={faq} key={faq.id} />
)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-image-section">
                                <div style={{
                                    backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=650&h=401&fit=crop")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '401px',
                                    borderRadius: '15px',
                                    marginBottom: '30px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                }} alt="Luxury Hotel - Building Management Excellence" />
                                <div className="faq-single-box animate__animated animate__slideInUp" style={{
                                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    color: 'white'
                                }}>
                                    <div className="faq-item-content">
                                        <div className="faq-icon-thumb" style={{
                                            backgroundColor: '#ff6b35',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px'
                                        }}>
                                            <i className="bi bi-people" style={{ fontSize: '24px', color: 'white' }}></i>
                                        </div>
                                        <div className="faq-title">
                                            <h4 style={{ color: 'white' }}>We Have Many Happy Clients All Over World Wide</h4>
                                            <span style={{ color: 'white' }}><i className="bi bi-chevron-double-right"></i> Award Winning BMS Solutions</span>
                                            <span style={{ color: 'white' }}><i className="bi bi-chevron-double-right"></i> Highest Success Rates</span>
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

export default FaqV2;