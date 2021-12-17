import React, { useEffect, useState } from 'react';
import './mobileMainPage.css';

import HebronBuildingImg from './MobileMainPageHz.png';
import H1Image from './Rectangle 317.png';

import { ReactComponent as MissionLogo } from './Mission.svg';
import { ReactComponent as VisionLogo } from './vision.svg';
import { ReactComponent as ContactsLogo } from './contacts.svg';
import { ReactComponent as CredentialsLogo } from './credentials.svg';
import MobilePageHebronInfoBlog from '../mobilePageHebronInfoBlog';

const MobileMainPage = () => {
    const [currentHeaderPageId, setCurrentHeaderPageId] = useState(1);

    const loadNextHeaderItem = () => {
        if (currentHeaderPageId === dataForRender.length) {
            setCurrentHeaderPageId(1);
        } else {
            setCurrentHeaderPageId((n) => n + 1);
        }
    };
    const dataForRender = [
        {
            id: 1,
            logo: <MissionLogo className="mobile-main-page-logo-svg" />,
            title: 'МІСІЯ',
            text: '1',
        },
        {
            id: 2,
            logo: <VisionLogo className="mobile-main-page-logo-svg" />,
            title: '2',
            text: '2',
        },
        {
            id: 3,
            logo: <ContactsLogo className="mobile-main-page-logo-svg" />,
            title: '3',
            text: '3',
        },
        {
            id: 4,
            logo: <CredentialsLogo className="mobile-main-page-logo-svg" />,
            title: '4',
            text: '4',
        },
    ];
    const dataForRenderHeaderItems = () => {
        return dataForRender.map((item, index, arr) => {
            return (
                <li key={item.id} className="mobile-main-page-header-li">
                    <div className="mobile-main-page-header-current-number-title-wrapper">
                        <div
                            className="mobile-main-page-header-current-number-wrapper"
                            onClick={loadNextHeaderItem}
                        >
                            <div className="mobile-main-page-header-current-number">
                                <span className="mobile-main-page-header-current-number-bold">
                                    0{item.id}/
                                </span>
                                <span className="mobile-main-page-header-current-number-faint">
                                    0{arr.length}
                                </span>
                            </div>
                            <div className="mobile-main-page-header-current-number-title-orange-line"></div>
                        </div>
                        <span className="mobile-main-page-header-current-title-itself">
                            {item.title}
                        </span>
                    </div>
                    <div className="mobile-main-page-header-current-number-logo-wrapper">
                        {item.logo}
                    </div>
                    <div className="mobile-main-page-header-current-number-text-wrapper">
                        {item.text}
                    </div>
                </li>
            );
        });
    };

    const dataForMobilePageInfoBlog = [
        {
            category: 'ОСВІТА',
            title: 'Початок великої місії',
            text: (
                <span>
                     5 років тому ми задумались, яким чином можна допомогти
                    кризовій молоді, в якої є потенціал, але немає можливості
                    успішно самореалізуватись у суспільстві, через брак коштів
                    та моральної підтримки. І зрозуміли, що найкраща допомога -
                    це <b>ОСВІТА </b>
                </span>
            ),
            isButton: true,
            buttonTitle: 'more info',
            buttonLink: '/nowhere/',
        },
    ];

    return (
        <div className="mobile-page-wrapper">
            <div className="change-life-together-wrapper">
                <div className="mobile-main-page-orange-strip"></div>
                <div className="mobile-main-page-change-life-together-wrapper">
                    <span>
                        <b>ЗМІНЮЄМО</b>
                    </span>
                    <span>
                        <b>ЖИТТЯ</b>
                    </span>
                    <span>
                        <b>РАЗОМ</b>
                    </span>
                </div>
            </div>
            <div className="hebron-building-image-wrapper">
                <img src={HebronBuildingImg} alt="HebronBuilding"></img>
            </div>
            <ul className="list-unstyled main-page-header-ul">
                {dataForRenderHeaderItems()[currentHeaderPageId - 1]}
            </ul>
            <div className="hebron-building-image-wrapper">
                <img src={H1Image} alt="HebronBuilding"></img>
            </div>
            <MobilePageHebronInfoBlog
                dataForBlog={dataForMobilePageInfoBlog[0]}
            />
        </div>
    );
};

export default MobileMainPage;
