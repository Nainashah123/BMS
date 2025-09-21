import Image from 'next/image';
import React from 'react';
import TeamSocialShare from '../utilities/TeamSocialShare';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleTeamV1 = ({ team }) => {
    const { id, thumb, icon, name, designation, singleTeamClass } = team

    return (
        <>
            <div className={`team-items-box ${singleTeamClass}  animate__animated animate__zoomIn`}>
                <div className="team-thumb">
                    <Image src={`/assets/images/team/${thumb}`} alt="image" width={305} height={415} />
                    <div className="team-icon style-two">
                        <ul>
                            <TeamSocialShare />
                        </ul>
                    </div>
                    <div className="team-main-icon style-two">
                        <Link href="#" onClick={handleSmoothScroll}><i className={icon}></i></Link>
                    </div>
                    <div className="team-content">
                        <h4><Link href="/about">{name}</Link></h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;