import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './mobileApp.css';

const MobileApp = () => {
    return (
        <BrowserRouter>
            
            <Switch>

                <Route exact path='/'>
                    <h1>main page mobile</h1>
                </Route>

            </Switch>
            
           
        </BrowserRouter>
    );
}
export default MobileApp;