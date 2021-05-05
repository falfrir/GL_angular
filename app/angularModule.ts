import 'moment'
import '@babel/polyfill'
import 'bootstrap';
import 'angular-hammer';

import './scss/gl.scss';

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {GlCommonModule} from './gl-common/gl-common.module'
import {glAngularStates} from './gl-common/gl.states';
import {GlWindowRefService} from './gl-common/services/gl-window-ref.service';
import {GlRootScopeShared} from './glCommon/services/glRootScopeSharedService';

declare const ENV: string;

const GL_APPS_API_URL: { [key: string]: string } = {
    dev: 'http://localhost:3000',
    prod: 'http://localhost:3000'
};

(<any>window).appENV = ENV;
(<any>window).glAppsApiUrl = GL_APPS_API_URL[ENV];

// The root Angular module
@NgModule({
    imports: [
        BrowserModule,
        NgbModule,
        // Provide Angular upgrade capabilities
        UpgradeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // Provides the @uirouter/angular directives
        UIRouterUpgradeModule.forRoot({states: glAngularStates}),

        GlCommonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        GlWindowRefService,
        {provide: GlRootScopeShared, useFactory: (i: any) => i.get('glRootScopeShared'), deps: ['$injector']},
    ],
    declarations: [],
    entryComponents: [],
    exports: []
})

export class GlAngularModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        // The DOM must be already be available
        this.upgrade.bootstrap(document.body, ['glApp']);
    }
}
