﻿'use strict';

app.config([
	'$stateProvider',
    '$urlRouterProvider',
    '$qProvider',
	function(
		$stateProvider,
		$urlRouterProvider,
	    $qProvider
        ) {

	    $urlRouterProvider.otherwise(function ($injector) {
	        var $state = $injector.get('$state');
	        return $state.go('home');
	    });

	    $stateProvider
        .state('home', {
            url: '/',
            controller : 'homeController',
            templateUrl: 'assets/app/template/home.html'
		})
		.state('barangay', {
            url: '/barangay',
            controller : 'barangayController',
            templateUrl: 'assets/app/template/barangay/barangay.html'
		})
		.state('event', {
            url: '/event',
            controller : 'eventController',
            templateUrl: 'assets/app/template/event/event.html'
        });

	    $qProvider.errorOnUnhandledRejections(false);
	}
])