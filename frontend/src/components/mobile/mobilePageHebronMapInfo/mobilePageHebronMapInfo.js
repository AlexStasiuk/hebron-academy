import React from 'react';
import { Link } from 'react-router-dom';
import './mobilePageHebronMapInfo.css';

const MobilePageHebronMapInfo = ({ dataForBlog }) => {
    const renderButton =
        dataForBlog.isButton === true ? (
            <Link to={dataForBlog.buttonLink} className="increased-z-index">
                <div className="mobile-page-hebron-info-map-button">
                    <span>{dataForBlog.buttonTitle}</span>
                </div>
            </Link>
        ) : null;
    return (
        <div className="mobile-main-page-map-content-wrapper">
            <div className="mobile-main-page-map-content-items">
                <span className="mobile-main-page-map-category">
                    {dataForBlog.category}
                </span>
                <span className="mobile-main-page-map-title">
                    <b>{dataForBlog.title}</b>
                </span>
                <span className="mobile-main-page-map-text">
                    {dataForBlog.text}
                </span>
                {renderButton}
            </div>
        </div>
    );
};
export default MobilePageHebronMapInfo;
