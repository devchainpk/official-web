import React from 'react';
import {render} from 'react-dom';
import Routes from './components/routes';
import './css/app';
import './css/reset';
import WebFont from 'webfontloader';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
WebFont.load({
  google: {
    families: ['Droid Sans', 'Indie Flower', 'Josefin Sans', 'Vidaloka']
  }
});

render(<Routes/>, document.getElementById('app'));
