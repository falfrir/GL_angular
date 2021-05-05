import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";
import {GlCommonModule} from '../gl-common/gl-common.module'

import './scss/gl-accounts.scss';

//components
import {GlAccountsComponent} from './components/gl-accounts/gl-accounts.component';
import {GlCreateAccountPopupComponent} from './components/gl-create-account-popup/gl-create-account-popup.component'
import {GlAccountsStates} from "./gl-accounts.states";
import {GlAccountsServise} from "./services/gl-accounts.servise";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // Provides the @uirouter/angular directives
        UIRouterUpgradeModule.forChild({ states: GlAccountsStates }),
        NgbModule,

        GlCommonModule
    ],
    declarations: [
        GlAccountsComponent,
        GlCreateAccountPopupComponent
    ],
    providers: [
        GlAccountsComponent,
        GlAccountsServise
    ],
    exports: [],
    entryComponents: [
        GlCreateAccountPopupComponent
    ]
})
export class GlAccountsModule {
}
