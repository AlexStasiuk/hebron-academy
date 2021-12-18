import React from 'react';
import './mobileAboutUsIntroduceWithHebronCommand.css';

const MobileAboutUsIntroduceWithHebronCommand = ({ hebronCommandData }) => {
    const renderHebronCommandData = () => {
        return hebronCommandData.map((item, index) => {
            const styleForInfoDiv =
                index % 2 === 0
                    ? 'mobile-about-us-introduce-hebron-command-li-info-wrapper'
                    : 'mobile-about-us-introduce-hebron-command-li-info-odd-wrapper';
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-about-us-introduce-hebron-command-li-wrapper"
                >
                    <img src={item.img} alt="" />
                    <div className={styleForInfoDiv}>
                        <span>{item.name}</span>
                        <span>{item.subtitle}</span>
                    </div>
                </li>
            );
        });
    };
    return (
        <div className="mobile-about-us-introduce-hebron-command-wrapper">
            <div className="mobile-about-us-introduce-hebron-command-squares-text-wrapper">
                <div className="mobile-about-us-introduce-hebron-command-squares-wrapper">
                    <div className="mobile-about-us-introduce-hebron-command-square"></div>
                    <div className="mobile-about-us-introduce-hebron-command-square"></div>
                </div>
                <span>Знайомтесь з командою Хеврону:</span>
            </div>
            <span className="mobile-about-us-introduce-hebron-command-text-about">
                Хеврон ІТ Академія – це команда однодумців, професіоналів та
                небайдужих людей. Нам подобається те, що робимо, тому робимо це
                якісно. Ми відкриті,  любимо технології, і використовуємо їх щоб
                розширювати межі та втілювати найсміливіші ідеї. 
            </span>
            <div className="mobile-about-us-introduce-hebron-command-div-li-wrapper">
                {renderHebronCommandData()}
            </div>
        </div>
    );
};
export default MobileAboutUsIntroduceWithHebronCommand;
