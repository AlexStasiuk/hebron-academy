import React, { useState } from 'react';
import './hebron-needs-join-page.css';
import {ReactComponent as GiveUnnecessaryThingsLogo} from './Віддай непотрібні речі.svg';
import {ReactComponent as MediaSupportLogo} from './Медіа підтримка.svg';
import {ReactComponent as FinanceSupportLogo} from './фінансова підтримка.svg';
import {ReactComponent as PersonalizedMentorshipLogo} from './Особисте наставництво.svg';
import {ReactComponent as MentorshipAndVoluntaryLogo} from './менторство та волентерство.svg';


const buttonItems = [
    {id: 1, img: <FinanceSupportLogo className='hebron-needs-logo'/>, imgSelected: <FinanceSupportLogo className='hebron-needs-logo-selected'/> , title: 'Фінансова підтримка організації'},
    {id: 2, img: <MentorshipAndVoluntaryLogo className='hebron-needs-logo'/>, imgSelected: <MentorshipAndVoluntaryLogo className='hebron-needs-logo-selected'/>, title: 'Менторство та волонтерство'},
    {id: 3, img: <PersonalizedMentorshipLogo className='hebron-needs-logo'/>, imgSelected: <PersonalizedMentorshipLogo className='hebron-needs-logo-selected'/>, title: 'Особисте наставництво студента'},
    {id: 4, img: <MediaSupportLogo className='hebron-needs-logo'/>, imgSelected: <MediaSupportLogo className='hebron-needs-logo-selected'/>, title: 'Медіа підтримка'},
    {id: 5, img: <GiveUnnecessaryThingsLogo className='hebron-needs-logo'/>, imgSelected: <GiveUnnecessaryThingsLogo className='hebron-needs-logo-selected'/>, title: 'Віддай непотрібні речі'},
];


const HebronNeedsJoinPage = () =>{
    const [clickeItemId, setClickedItemId] = useState(0);
    const ClickOnItem = (id) => {
        console.log(id);
        setClickedItemId(id);
    }
    const RenderContent = () => {
        let result = null;
        switch(clickeItemId){
            case 3:
            result = (<span>{buttonItems[clickeItemId - 1]['title']}</span>);
            break;
            case 5:
            result = (<span>{buttonItems[clickeItemId - 1]['title']}</span>);
            break;
            default:
            result = null;
            break;
        }
        return result;
    }
    const RenderButtons = () => {
        return buttonItems.map((item) => {
            const isFirstStyle = item.id === 1 ? 'hebron-needs-button-first-wrapper' : 'hebron-needs-button-wrapper';
            const isSelected = item.id === clickeItemId ? true: false;
            const logo = isSelected ? item.imgSelected: item.img;
            const titleStyle = isSelected ? 'hebron-needs-title-selected': 'hebron-needs-title';

            return (
                <li key={item.id} className={isFirstStyle} onClick={()=>ClickOnItem(item.id)}>
                    {logo}
                    <div className='hebron-needs-number-arrow-title-wrapper'>
                        <div className='hebron-needs-number-and-arrow'>
                            <span>
                                {'0' + item.id}
                            </span>
                            <div className='hebron-needs-arrow'></div>
                        </div>
                        <span className={titleStyle}>
                            {buttonItems[item.id - 1]['title']}
                        </span>
                    </div>
                </li>
            )
        })
    }
    return(
        <div className='hebron-needs-buttons-wrapper row no-gutters'>
            <div className='col-8 hebron-needs-buttons-main-info-wrapper'>
                <ul className='hebron-needs-buttons-itself-wrapper list-unstyled'>
                    {RenderButtons()}
                </ul>
                <div className='hebron-needs-button-content-wrapper'>
                    {RenderContent()}
                </div>
            </div>
        </div>
    );
}

export default HebronNeedsJoinPage;