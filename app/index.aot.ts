import 'reflect-metadata';
import 'core-js';
import 'zone.js';

import { NgZone, enableProdMode} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { UrlService } from '@uirouter/core';

import { GlAngularModuleNgFactory } from './angularModule.ngfactory';
import {GlAngularJsModule} from "./angularJsModule"
enableProdMode();

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
GlAngularJsModule.config(['$urlServiceProvider', $urlService => $urlService.deferIntercept()]);
// Manually bootstrap the Angular app
platformBrowser()
    .bootstrapModuleFactory(GlAngularModuleNgFactory)
    .then(platformRef => {
        // get() UrlService from DI (this call will create all the UIRouter services)
        const url: UrlService = platformRef.injector.get(UrlService);

        // Instruct UIRouter to listen to URL changes
        function startUIRouter() {
            url.listen();
            url.sync();
        }

        const ngZone: NgZone = platformRef.injector.get(NgZone);
        ngZone.run(startUIRouter);
    });
