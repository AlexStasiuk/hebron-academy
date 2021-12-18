import React from 'react';
import './mobileAboutUsReviews.css';
import VectorImg from './Vector.png';

const MobileAboutUsReviews = ({ dataForReviews }) => {
    const renderReviews = () => {
        return dataForReviews.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-about-us-reviews-li-wrapper"
                >
                    <img
                        src={VectorImg}
                        alt=""
                        className="mobile-about-us-reviews-vector-1"
                    />
                    <img
                        src={VectorImg}
                        alt=""
                        className="mobile-about-us-reviews-vector-2"
                    />
                    <div className="mobile-about-us-reviews-info-wrapper">
                        <span className="mobile-about-us-reviews-quote">
                            {item.quote}
                        </span>
                        <span className="mobile-about-us-reviews-name">
                            {item.name}
                        </span>
                    </div>
                    <img
                        src={item.img}
                        alt=""
                        className="mobile-about-us-reviews-img"
                    />
                </li>
            );
        });
    };
    return (
        <div className="mobile-about-us-reviews-wrapper">
            <span className="mobile-about-us-reviews-wrapper-first-span">
                Відгуки
            </span>
            <div className="mobile-about-us-reviews-div-li-wrapper">
                {renderReviews()}
            </div>
        </div>
    );
};

export default MobileAboutUsReviews;
