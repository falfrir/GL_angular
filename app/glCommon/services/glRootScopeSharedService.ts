/**
 * GlRootScopeShared service
 * This class was created for shared data between angularJS and Angular applications
 *
 * @class GlRootScopeShared
 */
export class GlRootScopeShared {
    static $inject = ['$rootScope', '$state'];

    constructor(public $rootScope: any, public $state: any) {
        this.$rootScope = $rootScope
        this.$state = $state
    }

}

export default ngModule => {
    ngModule.service('glRootScopeShared', GlRootScopeShared)
}
