import { Controller } from 'controllerim';

export class MenuController extends Controller {

    constructor(cptInstance) {
        super(cptInstance);
        this.component = cptInstance;
    }
    
    iAmMenuController() {}
}
