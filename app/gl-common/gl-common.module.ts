import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GlStatusMapPipe} from "./pipes/gl-status-map.pipe";
import {GlSortArrayPipe} from "./pipes/gl-sort-array.pipe";
//components
import {GlAccountsDashboardComponent} from '../gl-accounts/components/gl-accounts-dashboard/gl-accounts-dashboard.component';
import {GlAccountsServise} from "../gl-accounts/services/gl-accounts.servise";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GlStatusMapPipe,
        GlSortArrayPipe,

        GlAccountsDashboardComponent
    ],
    providers: [
        GlAccountsServise
    ],
    exports: [
        GlStatusMapPipe,
        GlSortArrayPipe,

        GlAccountsDashboardComponent
    ],
    entryComponents: [
        GlAccountsDashboardComponent
    ]
})
export class GlCommonModule {
}
