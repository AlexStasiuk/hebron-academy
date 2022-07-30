import React from 'react';
import './news.css';
import New from './img/new.png';
import NewsArr from './newsArr';
import { Arrinfo } from './ArrInfo';

const News = () => {
    return (
        <div className="new col-12">
            <div className="new-img">
                <img src={New} alt="" />
            </div>
            <div className="news-info">
                {NewsArr.map((i) => {
                    return <Arrinfo img={i.img} h1={i.h1} p={i.p} id={i.id} />;
                })}
            </div>
        </div>
    );
};

export default News;
