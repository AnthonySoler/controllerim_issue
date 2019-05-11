import { Controller } from 'controllerim';

export class HeaderController extends Controller {

    constructor(cptInstance) {
        super(cptInstance);
        this.component = cptInstance;
    }
    
    iAmHeaderController() {}
}
