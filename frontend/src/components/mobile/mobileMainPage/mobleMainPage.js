import React, { useState } from 'react';
import './mobileMainPage.css';

import HebronBuildingImg from './MobileMainPageHz.png';
import H1Image from './Rectangle 317.png';
import H2Image from './Rectangle 337.png';
import H3Image from './Habron design.png';
import H4Image from './Rectangle 339.png';
import H5Image from './Rectangle 340.png';

import { ReactComponent as MissionLogo } from './Mission.svg';
import { ReactComponent as VisionLogo } from './vision.svg';
import { ReactComponent as ContactsLogo } from './contacts.svg';
import { ReactComponent as CredentialsLogo } from './credentials.svg';
import MobilePageHebronInfoBlog from '../mobilePageHebronInfoBlog';
import MobilePageHebronMapInfo from '../mobilePageHebronMapInfo';
import MobileFormOnMainPage from '../mobileFormOnMainPage';

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
            buttonTitle: 'Детальніше',
            buttonLink: '/nowhere/',
        },
        {
            category: 'МОЖЛИВІСТЬ',
            title: 'Студенти Хеврон IT Академії ',
            text: (
                <span>
                     - це молоді люди з числа сиріт та випускників інтернатів,
                    внутрішньо переміщені особи, діти учасників воїнів АТО, а
                    також та молодь, яка опинилася у складних життєвих
                    обставинах. Це хлопці та дівчата, які можуть та хочуть
                    працювати, розвиватися та приносити користь суспільству.
                    Все, що їм потрібно, це  дати МОЖЛИВІСТЬ
                </span>
            ),
            isButton: false,
        },
        {
            //specially for map
            category: 'ПІДТРИМКА',
            title: 'Ми хочемо зробити більше!',
            text: (
                <span>
                     на сьогоднішній день ми змогли допомогти лише невеликій 
                    кількості молодих людей, але нашої допомоги потребує значно
                    більша кількість талановитих хлопців та дівчат по всій
                    Україні і ми можемо це зробити
                    <b> З ВАШОЮ ПІДТРИМКОЮ!</b>
                </span>
            ),
            isButton: true,
            buttonTitle: 'Детальніше',
            buttonLink: '/nowhere/',
        },
        {
            category: 'МАЙБУТНЄ',
            title: 'Наші Випускники ',
            text: (
                <span>
                    В перспективі стають не лише кваліфікованими спеціалістами в
                    галузі IT, а й СВІДОМИМИ та АКТИВНИМИ громадянами сучасного
                    суспільства.
                </span>
            ),
            isButton: false,
        },
        {
            category: 'КОМАНДА',
            title: 'Приєднуйтесь до нас!',
            text: (
                <span>
                    Хеврон ІТ Академія - це спільнота  людей,  яким важлива доля
                    соціально незахищеної молоді в Україні. Ми об’єднуємо
                    довкола себе меценатів, жертводавців, волонтерів, менторів
                    та просто небайдужих людей! 
                </span>
            ),
            isButton: false,
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
            <div className="hebron-building-image-wrapper">
                <img src={H2Image} alt="HebronBuilding"></img>
            </div>
            <MobilePageHebronInfoBlog
                dataForBlog={dataForMobilePageInfoBlog[1]}
            />
            <div className="hebron-building-image-wrapper">
                <MobilePageHebronMapInfo
                    dataForBlog={dataForMobilePageInfoBlog[2]}
                ></MobilePageHebronMapInfo>
                <img src={H3Image} alt="HebronBuilding"></img>
            </div>
            <div className="hebron-building-image-after-map-wrapper">
                <img src={H4Image} alt="HebronBuilding"></img>
            </div>
            <MobilePageHebronInfoBlog
                dataForBlog={dataForMobilePageInfoBlog[3]}
            />
            <div className="hebron-building-image-wrapper">
                <img src={H5Image} alt="HebronBuilding"></img>
            </div>
            <MobilePageHebronInfoBlog
                dataForBlog={dataForMobilePageInfoBlog[4]}
            />
            <MobileFormOnMainPage />
        </div>
    );
};

export default MobileMainPage;
