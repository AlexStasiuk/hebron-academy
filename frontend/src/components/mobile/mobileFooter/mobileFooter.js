import React from "react";

import HebronMobileFooterLogo from "./HEBRON-logo-mobile-footer.png";
import Visa from "./visa.png";
import Mastercard from "./mastercard.png";

import "./mobileFooter.css";

const MobileFooter = () => {
  return (
    <div className="mobile-footer-wrapper">
      <div className="mobile-footer-main-info-wrapper">
        <div className="mobile-footer-logo">
          <img src={HebronMobileFooterLogo} alt=""></img>
        </div>
        <div className="mobile-footer-contacts-wrapper">
          <span className="mobile-footer-not-important-info">
            Пишіть нам на пошту або телефонуйте:
          </span>
          <span>itacademyfororphans@gmail.com</span>
          <span>+380975623220</span>
        </div>
        <div className="mobile-footer-credentials">
          <div className="mobile-footer-pay-by-card-text-wrapper">
            <span className="mobile-footer-not-important-info">
              Оплата картою:
            </span>
            <span>VISA / Mastercard</span>
          </div>
          <div className="mobile-footer-visa-mastercard-wrapper">
            <img src={Visa} alt="visa"></img>
            <img src={Mastercard} alt="mastercard"></img>
          </div>
        </div>
        <div className="mobile-footer-support-button-wrapper">
          <div className="mobile-footer-support-button">
            <span>ПІДТРИМАТИ</span>
          </div>
        </div>
      </div>
      <div className="mobile-footer-copyright">
        <span>© 2021 Hebron. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default MobileFooter;
