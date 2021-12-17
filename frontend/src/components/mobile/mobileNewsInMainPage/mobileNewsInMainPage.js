import React from 'react';
import './mobileNewsInMainPage.css';
import { Link } from 'react-router-dom';

const MobileNewsInMainPage = ({ newsData }) => {
    const renderNews = () => {
        return newsData.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-news-in-main-page-wrapper"
                >
                    <img src={item.img} alt="" />
                    <span className="mobile-news-in-main-page-li-subtitle">
                        {item.subtitle}
                    </span>
                    <span className="mobile-news-in-main-page-li-title">
                        {item.title}
                    </span>
                    <span className="mobile-news-in-main-page-li-text">
                        {item.text}
                    </span>
                    <Link
                        to={item.link}
                        className="mobile-news-in-main-page-li-link"
                    >
                        <span className="mobile-news-in-main-page-li-link">
                            Read more
                        </span>
                    </Link>
                </li>
            );
        });
    };
    return (
        <div className="mobile-news-in-main-page-main-wrapper">
            <span className="mobile-news-in-main-page-subtitle">НОВИНИ</span>
            <span className="mobile-news-in-main-page-title">
                Наші партнери
            </span>
            {renderNews()}
        </div>
    );
};

export default MobileNewsInMainPage;
