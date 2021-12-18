import React from 'react';
import './mobileAboutUsGallery.css';

const MobileAboutUsGallery = ({ photos }) => {
    const renderPhotos = () => {
        return photos.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-about-us-gallery-li-wrapper"
                >
                    <div className="hebron-building-image-after-map-wrapper">
                        <img src={item.img} alt="HebronBuilding"></img>
                    </div>
                </li>
            );
        });
    };
    return (
        <div className="mobile-about-us-gallery-wrapper">
            <span>Фотогаларея</span>
            <div className="mobile-about-us-gallery-div-li-wrapper">
                {renderPhotos()}
            </div>
        </div>
    );
};

export default MobileAboutUsGallery;
