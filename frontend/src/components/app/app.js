import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from '../main-page';
import Footer from '../footer';
import HebronNeedsJoinPage from '../hebron-needs-join-page';
import AboutUs from '../about-us';
import Error from '../error';
import News from '../news';
import './app.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/news/'>
                    <News/>
                </Route>
                <Route path='/'>
                    <MainPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;