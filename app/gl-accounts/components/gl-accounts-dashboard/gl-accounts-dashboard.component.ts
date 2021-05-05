import {Input, Component, EventEmitter} from '@angular/core';

import {StateService} from '@uirouter/core';
import {GlWindowRefService} from "../../../gl-common/services/gl-window-ref.service";
import {GlAccountsServise} from "../../services/gl-accounts.servise";


@Component({
    selector: 'gl-accounts-dashboard',
    styles: [require('./gl-accounts-dashboard.component.scss').toString()],
    templateUrl: './gl-accounts-dashboard.component.html'

})
export class GlAccountsDashboardComponent {

    @Input('total') total: number;
    @Input('title') title: string;
    
    constructor(public $state: StateService,
                public glWindowRef: GlWindowRefService,
                public glAccountsService: GlAccountsServise) {
    }
    

}
