import React from 'react';
import {ReactDOM, BrowserRouter, Link} from 'react-dom';
import {Router, Route, browserhistory, IndexRoute} from 'react-router';
import Intro from '../Components/Intro/Intro';
import {About} from '../Pages/About/About';
import {PhaseMain} from '../Pages/PhaseMain/PhaseMain';
import {Main} from '../Components/Main';

const App = () => (
    <div>
    <Main />
    </div>
)

class Frame extends React.Component {
    render() {
        return(
            <Router history={browserhistory}>
                <Route exact path={"/"} component={Intro}>
                    <IndexRoute component={Intro} />
                    <Route exact path={"PhaseMain"} component={PhaseMain}/>
                    <Route exact path={"About"} componet={About} />
                </Route>
            </Router>
        );

    }
}


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>    ), document.getElementById('root'));

