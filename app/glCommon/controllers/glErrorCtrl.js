function GlErrorCtrl ($scope, $rootScope, $state, $stateParams) {
    "use strict";
    let glError = this;

    glError.status = $state.params.errorStatus;

    if ($stateParams.errorObj && ($stateParams.errorObj.message || ($stateParams.errorObj.data && $stateParams.errorObj.data.error) || $stateParams.errorObj.statusText)) {
        glError.message = $stateParams.errorObj.message || $stateParams.errorObj.data.error || $stateParams.errorObj.statusText;
    } else {
        glError.message = 'We can’t find page you’re looking for';
    }

    return glError;
};

GlErrorCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams'];

export default (ngModule) => {
    return ngModule.controller('GlErrorCtrl', GlErrorCtrl);
}
