(function () {
    var app = angular.module('app', [
        'ngRoute',
        'app.writingDesk',
        'app.draftDrawer'
        ])
        
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({ redirectTo: '/writing_desk' });
        }])
})();

