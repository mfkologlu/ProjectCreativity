var app = angular.module('app', []);

app.controller("TextAreaCtrl", function () {
    this.draftContent = "ss";
});

app.controller('ViewController', function () {
    this.activeView = 1;

    this.isActiveView = function (view) {
        return this.activeView===view;
    };

    this.setActiveView = function (view) {
        this.activeView = view;
    }
});