import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MobileNavbar from '../mobileNavbar/mobileNavbar';

import './mobileApp.css';

const MobileApp = () => {
    return (
        <BrowserRouter>
            <MobileNavbar/>
            <Switch>

                <Route exact path='/'>
                    <h1>main page mobile</h1>
                </Route>

            </Switch>
            
           
        </BrowserRouter>
    );
}
export default MobileApp;