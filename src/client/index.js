import React from 'react';
import {ReactDOM} from 'react-dom';
import {Router, browserhistory } from 'react-router';
import Template from '../Components/Template/Template';
import Routes from '../Components/Routes/Routes';
import Intro from '../Components/Intro/Intro';


ReactDOM.render(
    <Router
        history={browserhistory}
        routes={Routes}>
        <Template>
         </Template>  
        </Router>
    ), document.getElementById('root');


