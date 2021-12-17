import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileLogoInNavbar from '../mobileLogoInNavbar';
import './mobileNavbar.css';

const pagesInfo = [
    { page_name: 'Головна', link_to: '/', id: 1 },
    { page_name: 'Про НАС', link_to: '/about-us/', id: 2 },
    { page_name: 'НАВЧАННЯ', link_to: '/education/', id: 3 },
    { page_name: 'НОВИНИ', link_to: '/news/', id: 4 },
    { page_name: 'ХЕВРОН 100', link_to: '/hebron100/', id: 5 },
    { page_name: 'ПРИЄДНАТИСЬ', link_to: '/join/', id: 6 },
    { page_name: 'Види пожертв', link_to: '/donations/', id: 7 },
];

const MobileNavbar = () => {
    const [isMenuHidden, setMenuVisibility] = useState(true);
    const [activePage, setActivePage] = useState(1);
    const [currentLanguage, setCurrentLanguage] = useState('ukr');
    const toggleMenuVisibility = () => {
        setMenuVisibility(!isMenuHidden);
        console.log('menuVisability');
    };
    const getThreeLinesOrChest = () => {
        if (isMenuHidden) {
            return (
                <div className="three-lines-in-mobile-navbar">
                    <div className="line-in-mobile-navbar"></div>
                    <div className="line-in-mobile-navbar"></div>
                    <div className="line-in-mobile-navbar"></div>
                </div>
            );
        } else {
            return <div className="chest-in-mobile-navbar">X</div>;
        }
    };
    const renderMenuPages = () => {
        return pagesInfo.map((item, index, array) => {
            let isActivePage = item.id === activePage;
            let isLastPage = array.length - 1 === index;
            let stripContent = !isLastPage ? (
                <div className="mobile-navbar-menu-page-strip"></div>
            ) : null;
            let styleForPageLink = isActivePage
                ? ' mobile-navbar-menu-active-page'
                : ' mobile-navbar-menu-not-active-page';
            return (
                <Link
                    onClick={() => {
                        setActivePage(item.id);
                        toggleMenuVisibility();
                    }}
                    to={item.link_to}
                    className="unstyled-link-navbar"
                >
                    <li
                        key={item.id}
                        className={'mobile-navbar-menu-page' + styleForPageLink}
                    >
                        {item.page_name}

                        {stripContent}
                    </li>
                </Link>
            );
        });
    };
    const getStyleForLanguage = (value) => {
        if (value === 'eng' && currentLanguage === 'eng') {
            return 'selected-language-navbar';
        } else if (value === 'ukr' && currentLanguage === 'ukr') {
            return 'selected-language-navbar';
        } else {
            return 'not-selected-language-navbar';
        }
    };
    const getContentForNavbar = () => {
        if (!isMenuHidden) {
            return (
                <div className="list-unstyled menu-in-mobile-navbar">
                    {renderMenuPages()}
                    <div className="support-block-in-mobile-navbar">
                        <span>Підтримати</span>
                    </div>
                    <div className="language-switcher-in-mobile-navbar-wrapper">
                        <span
                            className={getStyleForLanguage('ukr')}
                            onClick={() => setCurrentLanguage('ukr')}
                        >
                            УКР
                        </span>

                        <span
                            className={getStyleForLanguage('eng')}
                            onClick={() => setCurrentLanguage('eng')}
                        >
                            ENG
                        </span>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };
    return (
        <div className="mobile-navbar-wrapper">
            <div className="mobile-navbar-logo-and-three-lines-wrapper">
                <MobileLogoInNavbar />
                <div
                    className="three-lines-in-navbar-wrapper"
                    onClick={() => toggleMenuVisibility()}
                >
                    {getThreeLinesOrChest()}
                </div>
            </div>
            {getContentForNavbar()}
        </div>
    );
};
export default MobileNavbar;
