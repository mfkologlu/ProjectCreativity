(function () {
    angular.module('app')
        .controller('ViewController', function () {
            this.activeView = 1;

            this.isActiveView = function (view) {
                return activeView == view;
            };

            this.setActiveView = function (view) {
                this.activeView = view;
            }
        });
})();