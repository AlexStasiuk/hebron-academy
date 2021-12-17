import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MobileFooter from '../mobileFooter';
import MobileMainPage from '../mobileMainPage';
import MobileNavbar from '../mobileNavbar';

import './mobileApp.css';

const MobileApp = () => {
    return (
        <BrowserRouter>
            <MobileNavbar />
            <Switch>
                <Route exact path="/">
                    <MobileMainPage />
                </Route>
                <Route path="*">
                    <h1>404</h1>
                </Route>
            </Switch>
            <MobileFooter />
        </BrowserRouter>
    );
};
export default MobileApp;
