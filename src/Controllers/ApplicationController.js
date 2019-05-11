import { Controller } from 'controllerim';

export class ApplicationController extends Controller {

    constructor(cptInstance) {
        super(cptInstance);
        this.component = cptInstance;
    }
    
    iAmApplicationController() {}
}
