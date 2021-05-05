import * as angular from 'angular';
import {GlAccountsDashboardComponent} from './gl-accounts-dashboard.component';
import {downgradeComponent} from "@angular/upgrade/static";

// AngularJS, this patch
export const glAccountsDashboardDowngradePatch = angular.
module('glAccountsDashboardDowngradePatch', [])
    .directive(
        'glAccountsDashboard',
        downgradeComponent({ component: GlAccountsDashboardComponent }) as angular.IDirectiveFactory
    )
