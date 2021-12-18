import React from 'react';
import './skypapper.css';
import Skypappers from './photo/skypappers.png';
import Vector from './photo/vector.png';

export const Skypapper = () => {
    //     const [content, setContent] = useState(null);
    //     let TextLogoA = () => {
    //         return(
    //                 <div className='text-logo-a'>
    //                 <p>Какой-то текст</p>
    //             </div>
    //         )
    //     }

    //     let TextLogoB = () =>{
    //         return(
    //        <div className='text-logo-b'>
    //                 <p>Ви  можете запросити студентів Хеврон IT Академії на роботу </p>
    //                 <div className='mt-3'></div>
    //                 <p>Ми розміщуємо інформацію про вашу  жертовність на наших</p>
    //                 <p>ресурсах і допомагаємо вашому  бренду стати</p>
    //                 <p>більш  впізнаваним та привабливим </p>
    //                 <div className='mt-3'></div>
    //                 <p>У вашій компанії зростає рівень соціально-відповідальної</p>
    //                 <p>культури, що стимулює  працівників до продуктивності</p>
    //                 <div className='mt-3'></div>
    //                 <p>Студенти Хеврон ІТ Академії в міру своїх можливостей можуть</p>
    //                 <p>допомагати вам на волонтерській основі</p>
    //                 <div className='mt-3'></div>
    //                 <p>Благодійність збільшить рівень довіри клієнтів до вашої</p>
    //                 <p>компанії!</p>
    //         </div>)
    //     }

    // let onClick1 = (parameter) => {
    //     switch(parameter){
    //         case 'TextLogoA' :
    //             setContent(TextLogoA);
    //             console.log('TextLogoA clicked');
    //             break;
    //         case 'TextLogoB' :
    //             setContent(TextLogoB);
    //             console.log('TextLogoB clicked');
    //             break;
    //         default: console.log(TextLogoA)
    //     };
    // }

    return (
        <div className="mobile-sky-content">
            <div className="mobile-sky-block">
                <img src={Skypappers} alt="" />
                <p>ДОПОМОГА</p>
                <span>Необхідні потреби</span>
                <span>Хеврону</span>
                <div className="mobile-sky-text">
                    <img src={Vector} alt="" />
                    <span>01/02</span>
                    <span>КОМПАНІЯ</span>
                </div>
            </div>
        </div>
    );
};
