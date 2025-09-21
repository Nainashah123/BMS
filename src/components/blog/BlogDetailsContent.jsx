import React from 'react';
import SearchWidget from '../widgets/SearchWidget';
import PopularPostWidget from '../widgets/PopularPostWidget';
import TagsWidget from '../widgets/TagsWidget';
import Image from 'next/image';
// Project images for blog content
const projectImages = {
    main: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Taj Hotel Dubai
    secondary: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Nexsys Downtown Dubai
    tertiary: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Nexsys Abu Dhabi
    quaternary: '/assets/images/about/dome-tower.jpg' // Dome Residential Tower
};
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import blogTeam from '@/public/assets/images/blog/blog-team.png'
import BlogSlider from './BlogSlider';
import BlogComments from './BlogComments';
import BlogForm from '../form/BlogForm';
import handleSmoothScroll from '../utilities/handleSmoothScroll';


const BlogDetailsContent = ({ blogInfo }) => {
    const { title, month, date, comments, commentIcon, dateIcon, authorIcon, author } = blogInfo

    return (
        <>
            <div className="blog-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-details-thumb">
                                            <div style={{
                                                backgroundImage: `url("${projectImages.main}")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '100%',
                                                height: '400px',
                                                borderRadius: '10px'
                                            }} />
                                        </div>
                                        <div className="blog-detaile-title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className="blog-details-meta">
                                            <span><i className={authorIcon}></i>By {author}</span>
                                            <span><i className={dateIcon}></i> {month} {date}</span>
                                            <span><i className={commentIcon}></i> ({comments})</span>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>NexSys Technologies LLC delivers cutting-edge building management solutions that revolutionize how buildings operate. Our comprehensive BMS services include advanced HVAC automation, smart lighting control systems, integrated security management, and energy optimization solutions that help buildings achieve maximum efficiency and sustainability.</p>
                                            <p>With expertise in Tridium&apos;s Niagara Framework and JACE controllers, we provide secure remote building management capabilities through cloud-based platforms. Our solutions integrate seamlessly with existing building infrastructure to create intelligent, connected environments that adapt to occupant needs while minimizing energy consumption.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-thumb">
                                            <div style={{
                                                backgroundImage: `url("${projectImages.secondary}")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '100%',
                                                height: '300px',
                                                borderRadius: '10px'
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-list">
                                            <ul>
                                                <li><i className="bi bi-check2-circle"></i> Advanced HVAC Automation Systems</li>
                                                <li className="active"><i className="bi bi-check2-circle"></i> Smart Lighting Control Integration</li>
                                                <li><i className="bi bi-check2-circle"></i> Energy Management & Monitoring</li>
                                                <li><i className="bi bi-check2-circle"></i> Access Control & Security Systems</li>
                                                <li><i className="bi bi-check2-circle"></i> Fire Safety & Emergency Systems</li>
                                                <li><i className="bi bi-check2-circle"></i> Building Analytics & Reporting</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-detaile-title">
                                            <h4>Advanced BMS Technology Solutions</h4>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>NexSys Technologies LLC specializes in advanced building management systems that integrate seamlessly with modern infrastructure. Our comprehensive BMS solutions provide real-time monitoring, automated controls, and energy optimization for commercial and residential buildings across the UAE.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-thumb">
                                            <div style={{
                                                backgroundImage: `url("${projectImages.tertiary}")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '100%',
                                                height: '250px',
                                                borderRadius: '10px'
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-thumb">
                                            <div style={{
                                                backgroundImage: `url("${projectImages.quaternary}")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '100%',
                                                height: '250px',
                                                borderRadius: '10px'
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-detaile-title">
                                            <h4>Smart Building Integration & Automation</h4>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>Our smart building solutions utilize cutting-edge technology including IoT sensors, cloud-based platforms, and artificial intelligence to create intelligent environments that adapt to occupant needs while maximizing energy efficiency and operational performance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="blog-quote-box">
                                        <div className="blog-quote-conent">
                                            <i className="fas fa-quote-right"></i>
                                            <p>NexSys Technologies LLC has transformed our building operations with their advanced BMS solutions. The energy savings and operational efficiency improvements have exceeded our expectations, making them our trusted partner for building automation.</p>
                                            <h4>Ahmed Al-Rashid</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-detaile-title">
                                            <h4>Niagara Framework & JACE Controllers</h4>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>With expertise in Tridium Niagara Framework and JACE controllers, NexSys delivers secure, scalable building automation solutions that enhance comfort, safety, and sustainability while reducing operational costs and environmental impact.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row line align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-tag">
                                            <h6>Tags</h6>
                                            <Link href="#" onClick={handleSmoothScroll}>BMS</Link>
                                            <Link href="#" onClick={handleSmoothScroll}>Automation</Link>
                                            <Link href="#" onClick={handleSmoothScroll}>Smart Building</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="ba-blog-details-social-icons">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-30">
                                    <div className="blog-details-team-item">
                                        <div className="blog-team-thumb">
                                            <div style={{
                                                backgroundImage: `url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=168&h=191&q=80")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '168px',
                                                height: '191px',
                                                borderRadius: '8px'
                                            }} />
                                        </div>
                                        <div className="blog-team-content">
                                            <h4><Link href="#" onClick={handleSmoothScroll}>Jonas Lawrence</Link></h4>
                                            <p>Jonas Lawrence is a senior BMS engineer at NexSys Technologies LLC with over 10 years of experience in building automation and smart building solutions across the Middle East region.</p>
                                        </div>
                                        <div className="ba-blog-details-social-icons two">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                                <BlogSlider />
                                <BlogComments />
                                <BlogForm />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <SearchWidget />
                            <PopularPostWidget />
                            <TagsWidget />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsContent;