import React, { Component } from 'react';
import { observer } from 'controllerim';
import { HeaderController } from '../Controllers/HeaderController';
import {ApplicationController} from '../Controllers/ApplicationController';

import MenuComponent from './MenuComponent';

class HeaderComponent extends Component {

    componentWillMount() {
      this.controller = new HeaderController(this);
    }
  
    render() {

        let appController = this.controller.getParentController(ApplicationController.name);

        if(appController.iAmApplicationController) {
            console.log('OK');
        }
        else {
            console.error('KO');
        }

        return (
            <header>
            <p>I am the header component</p>
                <MenuComponent/>
            </header>
      );
    }
  }

export default observer(HeaderComponent);
