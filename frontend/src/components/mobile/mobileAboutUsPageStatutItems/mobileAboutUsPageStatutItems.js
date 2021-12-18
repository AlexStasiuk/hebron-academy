import React from 'react';
import './mobileAboutUsPageStatutItems.css';

const MobileAboutUsPageStatutItems = ({ statutData }) => {
    const renderStatutData = () => {
        return statutData.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-about-us-page-statut-li-about-wrapper"
                >
                    <div className="mobile-about-us-page-statut-item-logo-about-wrapper">
                        <div className="mobile-about-us-page-statut-item-about-wrapper">
                            <div className="mobile-about-us-page-statut-item-about-number-line-wrapper">
                                <span className="mobile-about-us-page-statut-item-about-number">{`0${item.id}`}</span>
                                <div className="mobile-about-us-page-statut-item-about-orange-line"></div>
                            </div>
                            <span className="mobile-about-us-page-statut-item-about-title">
                                {item.title}
                            </span>
                        </div>
                        {item.logo}
                    </div>
                    <span className="mobile-about-us-page-statut-li-text">
                        {item.text}
                    </span>
                </li>
            );
        });
    };
    return (
        <div className="mobile-about-us-page-statut-items-wrapper">
            {renderStatutData()}
        </div>
    );
};

export default MobileAboutUsPageStatutItems;
