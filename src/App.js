import React, { Component } from 'react';
import { observer } from 'controllerim';
import { ApplicationController } from './Controllers/ApplicationController';
import HeaderComponent from './Components/HeaderComponent';

class App extends Component {

    componentWillMount() {
        this.controller = new ApplicationController(this);
    }

    render() {
        return (
            <div className="App">
                <HeaderComponent/>
            </div>
        );
    }
}

export default observer(App);
