import {NgForm} from "@angular/forms";
import * as moment from "moment";

function GlCreateAccountCtrl($scope, $rootScope, $uibModalInstance, $filter, $state, $log) {
    "use strict";
    var glCreateAccount = this;

    glCreateAccount.statusList = [
        'Disable',
        'Pending',
        'Active'
    ]



    glCreateAccount.$onInit = function () {

    }

    return glCreateAccount;
};

GlCreateAccountCtrl.$inject = ['$scope', '$rootScope', '$uibModalInstance', '$filter', '$state', '$log', 'glAccountsService'];

export default (ngModule) => {
    return ngModule.controller('GlCreateAccountCtrl', GlCreateAccountCtrl);
}
