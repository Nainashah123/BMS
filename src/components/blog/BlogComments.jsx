import Image from 'next/image';
import React from 'react';
// Professional user avatars for BMS industry
const userAvatars = {
    user1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80', // Professional man
    user2: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80'  // Professional woman
};
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BlogComments = () => {
    return (
        <>
            <div className="col-lg-12">
                <div className="blog-details-comment">
                    <h5>Comments (2)</h5>
                    <div className="blog-comment-list">
                        <ul>
                            <li>
                                <div className="blog-comment-box mb-60">
                                    <div className="blog-comment-thumb">
                                        <div style={{
                                            backgroundImage: `url("${userAvatars.user1}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%'
                                        }} />
                                    </div>
                                    <div className="blog-comment-content">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <h6 className="title">Ahmed Al-Rashid</h6>
                                                <span className="date">Dec 15, 2024 / 10:30 AM</span>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="text-sm-end">
                                                    <Link className="replay-link" href="#" onClick={handleSmoothScroll}>Replay</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-main">
                                            <p>Excellent article on BMS automation! NexSys Technologies LLC has been our trusted partner for building management systems. Their Niagara Framework implementation reduced our energy costs by 25% and improved our building's operational efficiency significantly. Highly recommend their services!</p>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="blog-comment-box inner">
                                            <div className="blog-comment-thumb">
                                                <div style={{
                                            backgroundImage: `url("${userAvatars.user2}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%'
                                        }} />
                                            </div>
                                            <div className="blog-comment-content">
                                                <div className="row">
                                                    <div className=" col-lg-6 col-md-6">
                                                        <h6 className="title">Sarah Thompson</h6>
                                                        <span className="date">Dec 15, 2024 / 11:45 AM</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="text-sm-end">
                                                            <Link className="replay-link" href="#" onClick={handleSmoothScroll}>Replay</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-main">
                                                    <p>Great insights on smart building integration! As a facility manager, I can confirm that the JACE controller solutions mentioned here have transformed our building operations. The real-time monitoring and automated controls have made our job much more efficient. Thank you for sharing this valuable information!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogComments;