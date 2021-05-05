function GlAccountsCtrl($scope, $rootScope, $state, $log, $uibModal, glAccountsService) {
    let glAccounts = this;


    glAccounts.$onInit = function () {

    }
    return glAccounts;
};

GlAccountsCtrl.$inject = ['$scope', '$rootScope', '$state', '$log', '$uibModal', 'glAccountsService'];

export default (ngModule) => {
    return ngModule.controller('GlAccountsCtrl', GlAccountsCtrl);
}
