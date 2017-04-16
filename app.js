(function () {
    var app = angular.module('app', [
        'ngRoute',
        'app.writingDesk'])
        
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({ redirectTo: '/writing_desk' });
        }])

        .controller('ViewController', function () {
            this.activeView = 1;

            this.isActiveView = function (view) {
                return this.activeView === view;
            };

            this.setActiveView = function (view) {
                this.activeView = view;
            }
        });
})();

