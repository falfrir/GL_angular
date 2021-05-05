import {NgHybridStateDeclaration} from "@uirouter/angular-hybrid";

import {GlAccountsComponent} from "./components/gl-accounts/gl-accounts.component";

export const GlAccounts: NgHybridStateDeclaration = {
    name: 'glApp.accounts2.**',
    url: '/',
    loadChildren: () => import('../gl-accounts/gl-accounts.module')
        .then(result => result.GlAccountsModule)
};

export const GlAccountsRoot: NgHybridStateDeclaration = {
    url: '/ng2/accounts',
    name: 'glApp.accounts2',
    component: GlAccountsComponent,
};


export const GlAccountsStates = [
    GlAccountsRoot
];
