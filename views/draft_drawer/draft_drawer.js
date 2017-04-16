(function () {
    angular.module('app.draftDrawer', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/draft_drawer', {
                templateUrl: 'views/draft_drawer/draft_drawer.html',
                controller: 'DraftDrawerController'
            });
        }])

        .controller('DraftDrawerController', [function () {
            this.books = [
                {
                    name : "Clear Skies",
                    synopsis : "A story about a man and his plane.",
                    content : "The boy once looked at the bright skies above. He imagined himself flying..."
                },
                {
                    name : "Fun Times",
                    synopsis : "A guide on how to throw the best parties!",
                    content : "So you wanna be the guy, the dude, the mega, the girl or whatever. Well, you can! And I am gonna teach you how..."
                }
            ];
        }]);
})();