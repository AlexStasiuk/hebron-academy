import React from 'react';
import './mobileOrganizationAndAssociates.css';
import Org1 from './Rectangle 528.png';
import Org2 from './Rectangle 530.png';
import Org3 from './Rectangle 531.png';

const MobileOrganizationAndAssociates = () => {
    const organisationsData = [
        { id: 1, img: Org1 },
        { id: 2, img: Org2 },
        { id: 3, img: Org3 },
    ];
    const renderOrganisations = () => {
        return organisationsData.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-and-associates-main-p-organisations-li-wrapper"
                >
                    <img src={item.img} alt="" />
                </li>
            );
        });
    };
    return (
        <div className="mobile-and-organisations-associates-main-wrapper">
            <div className="mobile-and-organisations-associates-title-subtitle-wrapper">
                <span className="mobile-and-organisations-associates-organisation">
                    Організація
                </span>
                <span className="mobile-and-organisations-associates-associates">
                    Наші партнери
                </span>
            </div>

            <div className="mobile-and-associates-main-p-organisations-wrapper">
                {renderOrganisations()}
            </div>
        </div>
    );
};
export default MobileOrganizationAndAssociates;
