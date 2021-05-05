import * as angular from "angular";

import 'oclazyload'
import 'angular-storage'
import 'angular-sanitize'
import 'angular-resource'
import 'angular-ui-bootstrap'
import 'angular-websocket'
import 'angular-cookies'
import 'angular-animate'
import 'angular-touch'

import {glAccountsDashboardDowngradePatch} from "./gl-accounts/components/gl-accounts-dashboard/glAccountsDashboardDowngradePatch";
export const GlAngularJsModule = angular.module('glApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.router.upgrade',
    'ui.bootstrap',
    'oc.lazyLoad',
    'angular-websocket',
    'angular-storage',

    'glAccountsModule',

    glAccountsDashboardDowngradePatch.name
])

require('./glCommon/config.js').default(GlAngularJsModule);
require('./glCommon/config.router.js').default(GlAngularJsModule);
require('./glCommon/run.js').default(GlAngularJsModule);
require('./glCommon/controllers/glAppCtrl.js').default(GlAngularJsModule);


require('./glCommon/services/glRootScopeSharedService').default(GlAngularJsModule);
require('./glAccounts/glAccountsModule').default(GlAngularJsModule);


