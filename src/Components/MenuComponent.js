import React, { Component } from 'react';
import { observer } from 'controllerim';
import { MenuController } from '../Controllers/MenuController';

import {ApplicationController} from '../Controllers/ApplicationController';
import {HeaderController} from '../Controllers/HeaderController';

class MenuComponent extends Component {

    componentWillMount() {
      this.controller = new MenuController(this);
    }
  
    render() {

        let appController = this.controller.getParentController(ApplicationController.name);

        if(appController.iAmApplicationController) {
            console.log('OK');
        }
        else {
            console.error('KO');
        }

        let headerController = this.controller.getParentController(HeaderController.name);

        if(headerController.iAmHeaderController) {
            console.log('OK');
        }
        else {
            console.error('KO');
        }

        return (
            <nav>
                <ul>
                    <li>Menu item</li>
                </ul>
            </nav>
      );
    }
  }

export default observer(MenuComponent);
