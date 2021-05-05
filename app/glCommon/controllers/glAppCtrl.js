function GlAppCtrl($scope, $state, $log, $window, $timeout, $rootScope) {
    var glApp = this;

    $rootScope.buildHash = HASH;
    $rootScope.appENV = ENV;

    return glApp;
};

GlAppCtrl.$inject = ['$scope', '$state', '$log', '$window', '$timeout', '$rootScope'];

export default (ngModule) => {
    ngModule.controller('GlAppCtrl', GlAppCtrl);
}
