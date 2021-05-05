import './scss/glAccounts.scss';

export default (ngModule) => {
    const glAccountsModule = angular.module('glAccountsModule', []);

    require('./run.glAccounts.js').default(glAccountsModule);
    require('./config.glAccounts.router.js').default(glAccountsModule);

    require('./services/glAccountsService').default(glAccountsModule);

    require('./filters/glStatusMapFilter').default(glAccountsModule);

};
