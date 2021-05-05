export default ngModule => {
    ngModule.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $stateProvider
                .state('glApp.accounts', {
                    url: '/accounts',
                    resolve: {
                        load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            return new Promise((resolve, reject) => {
                                require.ensure([], function () {
                                    $ocLazyLoad.load([
                                        require('./controllers/glAccountsCtrl.js').default(ngModule),
                                        require('./controllers/glCreateAccouuntsCtrl.js').default(ngModule),
                                    ]);
                                    resolve();
                                });
                            });
                        }]
                    },
                    data: {},
                    template: require('./partials/glAccounts.html'),
                    controller: 'GlAccountsCtrl as glAccounts',
                })

        }
    ]);
}
