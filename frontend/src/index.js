import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/desktop/app';

const isMobile = window.innerWidth <= 500;
if(!isMobile){

  ReactDOM.render(

  <App/>,
    document.getElementById('root')
  );
}
else{
  ReactDOM.render(

    <h1>mobileTest</h1>,
      document.getElementById('root')
    );
}