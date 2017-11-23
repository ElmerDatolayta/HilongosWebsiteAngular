'use strict';

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
            url: '/barangay/:barangayId',
            controller : 'barangayController',
            templateUrl: 'assets/app/template/barangay/barangay.html'
		})
		.state('event', {
            url: '/event',
            controller : 'eventController',
            templateUrl: 'assets/app/template/event/event.html'
        })
        .state('governance', {
            url: '/governance',
            templateUrl: 'assets/app/template/governance/governance.html'
		})
		.state('about', {
            url: '/about',
            controller : 'aboutController',
            templateUrl: 'assets/app/template/about/about.html'
        })
		.state('investor', {
            url: '/investor',
            controller : 'investorController',
            templateUrl: 'assets/app/template/investor/investor.html'
        })
        .state('department', {
            url: '/department',
            templateUrl: 'assets/app/template/department/department.html'
        })
        .state('departmentSection', {
            url: '/department/:departmentId',
            controller : 'departmentSectionController',
            templateUrl: 'assets/app/template/department/departmentSection/departmentView.html'
        })
        .state('tourist', {
            url: '/tourist',
            templateUrl: 'assets/app/template/tourist/tourist.html'
        })
        .state('education', {
            url: '/education',
            templateUrl: 'assets/app/template/education/education.html'
        });

	    $qProvider.errorOnUnhandledRejections(false);
	}
])