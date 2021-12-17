import React from 'react';
import './mobileContactsNearGoogleMaps.css';

import SocialNet1 from './Vector.png';
import SocialNet2 from './Vector (1).png';
import SocialNet3 from './Vector (2).png';
import SocialNet4 from './Vector (3).png';
import SocialNet5 from './Vector (4).png';

const MobileContactsNearGoogleMaps = () => {
    const dataForRender = [
        {
            id: 1,
            title: 'Адреса:',
            text: 'Львів-Брюховичі, вул. Бірківська, 11',
        },
        { id: 2, title: 'E-mail:', text: 'itacademyfororphans@gmail.com' },
        { id: 3, title: 'Skype:', text: 'ITacademyfororphans' },
        { id: 4, title: 'Телефон:', text: '+380 50 750 2555 - Орест Яцкуляк' },
    ];
    const imagesForRender = [
        { id: 1, img: SocialNet1 },
        { id: 2, img: SocialNet2 },
        { id: 3, img: SocialNet3 },
        { id: 4, img: SocialNet4 },
        { id: 5, img: SocialNet5 },
    ];
    const renderData = () => {
        return dataForRender.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-contacts-near-google-maps-li-wrapper"
                >
                    <span className="mobile-contacts-near-google-maps-li-title">
                        {item.title}
                    </span>
                    <span>{item.text}</span>
                </li>
            );
        });
    };
    const renderContacts = () => {
        return imagesForRender.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-contact-near-google-maps-social-network-li-wrapper"
                >
                    <img src={item.img} alt={'socialNetWork: ' + item.id} />
                </li>
            );
        });
    };

    return (
        <div className="mobile-contact-near-google-maps">
            <span className="mobile-contact-near-google-maps-subtitle">
                КОНТАКТИ
            </span>
            <span className="mobile-contact-near-google-maps-title">
                Як нас знайти?
            </span>
            <br />
            {renderData()}
            <div className="mobile-contact-near-google-maps-social-network-links-wrapper">
                {renderContacts()}
            </div>
        </div>
    );
};

export default MobileContactsNearGoogleMaps;
