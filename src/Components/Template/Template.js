import React, {Component} from 'react';
import {ReactDOM} from 'react-router-dom'
import Intro from '../Intro/Intro'

export default class Template extends Component {
    render(){
        return (
            <div>
                <React.Fragment>            
                <header>
                    <h1>PhaseMatrix</h1>
                </header>
                    <main>>
                        {this.props.chidren}
                    </main>  
                    </React.Fragment>
            </div>
        )
    }
};


ReactDOM.render(<Template />, document.getElementById("root"));