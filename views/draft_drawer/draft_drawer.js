(function () {
    angular.module('app.draftDrawer', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/draft_drawer', {
                templateUrl: 'views/draft_drawer/draft_drawer.html',
                controller: 'DraftDrawerController'
            });
        }])

        .controller('DraftDrawerController', [function () {
        }]);
})();