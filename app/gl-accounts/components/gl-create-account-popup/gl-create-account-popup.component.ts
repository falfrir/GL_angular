import * as moment from "moment";

import {Input, Component, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StateService} from '@uirouter/core';

import {NgbActiveModal, NgbCalendar} from "@ng-bootstrap/ng-bootstrap";
import {GlWindowRefService} from "../../../gl-common/services/gl-window-ref.service";
import {GlAccountsServise} from "../../services/gl-accounts.servise";


@Component({
    selector: 'gl-create-account-popup',
    styles: [require('./gl-create-account-popup.component.scss').toString()],
    templateUrl: './gl-create-account-popup.component.html'

})
export class GlCreateAccountPopupComponent {
    statusList: Array<String> = [
        'Disable',
        'Pending',
        'Active'
    ]

    constructor(public $state: StateService,
                public activeModal: NgbActiveModal,
                public glWindowRef: GlWindowRefService,
                public glAccountsService: GlAccountsServise,
                public ngbCalendar: NgbCalendar) {

    }

}
