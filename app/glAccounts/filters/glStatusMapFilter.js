
/**
 * @type {Object}
 * Lookup map for satus map
 */
const typesLookupMap = {
    "Disable" : 'warning',
    "Pending": 'danger',
    "Active" : 'primary'
}

export default (ngModule) => {
    ngModule.filter('glStatusMap', ['$filter', function ($filter) {
        return (type) => {
            return typesLookupMap[type] || 'primary';
        }
    }]);
}
