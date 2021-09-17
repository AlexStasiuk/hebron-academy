import React, {useState} from 'react';

import './hebron-command-in-about-us-page.css';
const HebronCommandInAboutUsPage = ({data}) =>{
    const [currentIndex, setIndex] = useState(0);

    const canChangeCurrentIndex = (newIndex) =>{
        if(newIndex + 2 >= data.length || newIndex < 0){
            return false;
        }
        return true;
    }
    const scrollNews = (value) => {
        if(value === 'right'){
            let newIndex = currentIndex + 1;
            if(canChangeCurrentIndex(newIndex)){
                setIndex(newIndex);
            }
        }
        else if(value === 'left'){
            let newIndex = currentIndex - 1;
            if(canChangeCurrentIndex(newIndex)){
                setIndex(newIndex);
            }
        }
    }
    const getpersonsForRender = () =>{
        if (currentIndex + 2 < data.length && currentIndex >= 0){
            return [data[currentIndex], data[currentIndex + 1], data[currentIndex + 2]];
        }
        else {
            setIndex(0);
            return [data[0], data[1], data[2]];
        }
    }
    const CommandRender = () =>{
        const dataForRender = getpersonsForRender();
        return dataForRender.map((item) =>{
            return(
                <li key={item.id}>
                    
                </li>
            );
        });
    }
    return (
        <div className='row no-gutters hebron-command-wrapper'>
            <div className='col-2'></div>
            <div className='col-8 hebron-command-info-wrapper'>
                <ul>
                    {CommandRender}
                </ul>
                <div className='controll-buttons'></div>
            </div>
            <div className='col-2'></div>
        </div>
    );
}
export default HebronCommandInAboutUsPage;