
function GlAccountsCtrl($scope, $rootScope, $state, $log, $uibModal, glAccountsService, $route) {
    let glAccounts = this;


    glAccounts.$onInit = function () {
        this.data = glAccountsService.getAccounts();

        glAccounts.onClickCreateAccount = function () {
            console.debug($route);
            $uibModal.open({
                templateUrl: '../../glAccounts/partials/createAccountPopUp.html',
                controller: 'glApp'
                //template: require('./partials/createAccountPopUp.html'),
            });

        }

    }

    return glAccounts;
};



GlAccountsCtrl.$inject = ['$scope', '$rootScope', '$state', '$log', '$uibModal', 'glAccountsService'];

export default (ngModule) => {
    return ngModule.controller('GlAccountsCtrl', GlAccountsCtrl);
}
