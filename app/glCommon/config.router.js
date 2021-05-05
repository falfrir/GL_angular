export default ngModule => {
    ngModule
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide',
            function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {
                $httpProvider.defaults.withCredentials = true;

                $urlRouterProvider.otherwise("accounts");

                $stateProvider
                    //HOME
                    .state('glApp', {
                        abstract: true,
                        data: {
                            name: 'glApp'
                        },
                        template: require('./partials/glApp.html'),
                        controller: 'GlAppCtrl as glApp'
                    })
                    //Error
                    .state('glApp.error', {
                        url: '/error/:errorStatus',
                        params: {errorObj: null},
                        resolve: {
                            load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                return new Promise((resolve, reject) => {
                                    require.ensure([], function () {
                                        $ocLazyLoad.load([
                                            require('./controllers/glErrorCtrl.js').default(ngModule)
                                        ]);
                                        resolve();
                                    });
                                });
                            }]
                        },
                        template: require('./partials/glError.html'),
                        controller: 'GlErrorCtrl as glError'
                    })
            }
        ]);
}
