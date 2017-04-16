(function () {
    angular.module('app.writingDesk', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/writing_desk', {
                templateUrl: 'views/writing_desk/writing_desk.html',
                controller: 'WritingDeskController'
            });
        }])

        .controller('WritingDeskController', [function () {
            this.draftContent = "ss";
        }]);
})();