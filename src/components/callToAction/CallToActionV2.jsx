import React from 'react';

const CallToActionV2 = () => {
    return (
        <>
            <div className="call-do-action-area style-two animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="call-do-title style-two">
                                <h2>Comprehensive Building</h2>
                                <h2>Management Solutions</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="call-do-image-small">
                                <div style={{
                                    backgroundImage: 'url("https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=350&h=300&fit=crop")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '300px',
                                    borderRadius: '15px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }} alt="BMS Technology" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CallToActionV2;