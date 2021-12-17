import React from 'react';
import { Link } from 'react-router-dom';
import './mobilePageHebronInfoBlog.css';

const MobilePageHebronInfoBlog = ({ dataForBlog }) => {
    const renderSemiTransparentLargeTitle = () => {
        return dataForBlog.title.split(' ').map((word) => {
            return <span>{word}</span>;
        });
    };
    const renderButton =
        dataForBlog.isButton === true ? (
            <Link to={dataForBlog.buttonLink} className="increased-z-index">
                <div className="mobile-page-hebron-blog-button">
                    <span>{dataForBlog.buttonTitle}</span>
                </div>
            </Link>
        ) : null;
    return (
        <div className="mobile-page-for-hebron-blog-wrapper">
            <div className="mobile-page-large-semi-transparent-title">
                {renderSemiTransparentLargeTitle()}
            </div>
            <span className="increased-z-index mobile-page-hebron-blog-red-category">
                {dataForBlog.category}
            </span>
            <span className="increased-z-index mobile-page-hebron-blog-title">
                {dataForBlog.title}
            </span>
            <span className="increased-z-index mobile-page-hebron-blog-text">
                {dataForBlog.text}
            </span>
            {renderButton}
        </div>
    );
};

export default MobilePageHebronInfoBlog;
