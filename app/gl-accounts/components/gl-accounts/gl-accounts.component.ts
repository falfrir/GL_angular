import {Input, Component, EventEmitter} from '@angular/core';
import {StateService} from '@uirouter/core';

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import {GlWindowRefService} from "../../../gl-common/services/gl-window-ref.service";
import {GlRootScopeShared} from '../../../glCommon/services/glRootScopeSharedService';

import {GlAccountsServise} from "../../services/gl-accounts.servise";
import {GlCreateAccountPopupComponent} from "../gl-create-account-popup/gl-create-account-popup.component"

@Component({
    selector: 'gl-accounts',
    styles: [require('./gl-accounts.component.scss').toString()],
    templateUrl: './gl-accounts.component.html'
})
export class GlAccountsComponent {

    constructor(public $state: StateService,
                public modalService: NgbModal,
                public glWindowRef: GlWindowRefService,
                public glAccountsService: GlAccountsServise,
                public glRootScopeShared: GlRootScopeShared) {
    }

    ngOnInit() {

    }
}
