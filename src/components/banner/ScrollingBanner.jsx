import React from 'react';
import Image from 'next/image';

const ScrollingBanner = () => {
    const bannerData = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            title: "Construction & Infrastructure",
            description: "Building Management Systems"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            title: "Data Centers & IT",
            description: "Critical Infrastructure Management"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/159106/greenhouse-plant-nursery-green-159106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            title: "Green Building Solutions",
            description: "Sustainable Technology Integration"
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            title: "Healthcare Facilities",
            description: "Medical Building Management"
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            title: "Smart Residential",
            description: "Home Automation Systems"
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            title: "Retail & Shopping",
            description: "Mall Environment Control"
        },
        {
            id: 7,
            image: "https://images.pexels.com/photos/1544947/pexels-photo-1544947.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            title: "Airport & Transportation",
            description: "Public Safety Systems"
        }
    ];

    return (
        <>
            <div className="scrolling-banner-area">
                <div className="container-fluid p-0">
                    <div className="scrolling-banner-wrapper">
                        <div className="scrolling-banner-content">
                            <div className="scrolling-banner-track">
                                {bannerData.map((item, index) => (
                                    <div key={item.id} className="scrolling-banner-item">
                                        <div className="banner-image">
                                            <Image 
                                                src={item.image} 
                                                alt={item.title}
                                                width={400}
                                                height={300}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div className="banner-overlay">
                                                <div className="banner-text">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {bannerData.map((item, index) => (
                                    <div key={`duplicate-${item.id}`} className="scrolling-banner-item">
                                        <div className="banner-image">
                                            <Image 
                                                src={item.image} 
                                                alt={item.title}
                                                width={400}
                                                height={300}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div className="banner-overlay">
                                                <div className="banner-text">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScrollingBanner;
