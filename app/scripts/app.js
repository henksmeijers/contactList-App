'use strict';

angular.module('contactApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })



            // route for the menu page
            .state('app.menu', {
                url: 'contact',
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'contactsController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    })
;
