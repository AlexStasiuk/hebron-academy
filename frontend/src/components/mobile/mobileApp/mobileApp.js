import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MobileAboutUsPage from '../mobileAboutUsPage';
import MobileFooter from '../mobileFooter';
import MobileMainPage from '../mobileMainPage';
import MobileNavbar from '../mobileNavbar';
import { Error } from '../404/404';
import { Donate } from '../donate/donate';
import { Hebron100 } from '../hebron100/hebron100';
import { News } from '../news/news';
import { Learn } from '../learn/learn';
import { Join } from '../join/join';
import './mobileApp.css';

const MobileApp = () => {
    return (
        <BrowserRouter>
            <MobileNavbar />
            <Switch>
                <Route exact path="/">
                    <MobileMainPage />
                </Route>
                <Route path="/about-us/">
                    <MobileAboutUsPage />
                </Route>
                <Route path="/donations/">
                    <Donate />
                </Route>
                <Route path="/hebron100/">
                    <Hebron100 />
                </Route>
                <Route path="/join/">
                    <Join />
                </Route>
                <Route path="/news/">
                    <News />
                </Route>
                <Route path="/education/">
                    <Learn />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
            <MobileFooter />
        </BrowserRouter>
    );
};
export default MobileApp;
