import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/desktop/app';
import MobileApp from './components/mobile/mobileApp';

const isMobile = window.innerWidth <= 500;
if(!isMobile){

  ReactDOM.render(

  <App/>,
    document.getElementById('root')
  );
}
else{
  ReactDOM.render(

    <MobileApp/>,
      document.getElementById('root')
    );
}