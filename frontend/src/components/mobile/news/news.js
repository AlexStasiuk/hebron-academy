import React from 'react';
import { Link } from 'react-router-dom';
import './news.css';
import NewsInfo from './newsinfo';
import { Map } from '../map/map';
export const News = () => {
    return (
        <div className="mobile-news-content">
            <div className="mobile-text-news">
                <span>НОВИНИ</span>
            </div>
            <div className="mobile-links">
                <Link to="#">Усі статті</Link>
                <Link to="#">Історії успіху</Link>
                <Link to="#">Новинки</Link>
                <Link to="#">Блог</Link>
            </div>
            <div className="mobile-newsinfo">
                {NewsInfo.map((Info) => (
                    <div key={Info.id}>
                        <img src={Info.img} alt="" />
                        <div
                            className="mobile-newsinfo-text"
                            style={{ textAlign: 'start' }}
                        >
                            <span>{Info.h1}</span>
                            <span>{Info.p}</span>
                        </div>
                        <button className="mobile-read-more">READ MORE-</button>
                    </div>
                ))}
            </div>
            <Map />
        </div>
    );
};
