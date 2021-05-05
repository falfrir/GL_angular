function glAccountsService ($resource) {
    const rootUrl = glAppsApiUrl;

    return $resource('', {}, {
        getAccounts: {
            url: rootUrl + '/accounts',
            isArray: true,
            method: 'GET'
        },
        createAccount: {
            url: rootUrl + '/accounts',
            method: 'POST'
        },
        updateAccount: {
            url: rootUrl + '/accounts/:id',
            method: 'PUT'
        },
        deleteAccount: {
            url: rootUrl + '/accounts/:id',
            method: 'DELETE'
        },
    });
};

glAccountsService.$inject = ['$resource'];

export default (ngModule) => {
    ngModule.service('glAccountsService',  glAccountsService);
}
