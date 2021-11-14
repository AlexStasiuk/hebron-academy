import React from 'react';
import './mobileLogoInNavbar.css';

const MobileLogoInNavbar = () => {
    return(
        <div className='mobile-logo-in-navbar-wrapper'>
            <div className='orange-squares-in-mobile-logo-wrapper'>
                <div className='orange-square-in-mobile-logo'></div>
                <div className='orange-square-in-mobile-logo'></div>
            </div>
            <div className='mobile-logo-hebron-text'>
                HEBRON
            </div>
            <div className='mobile-logo-other-text'>
                <span>
                    Education
                </span>
                <span>
                    Charity organisation
                </span>
            </div>
        </div>
    )
}

export default MobileLogoInNavbar;