(function () {
	'use strict';
	var stateRouter = function($stateProvider, $urlRouterProvider) {
		var rootState = {
			name: 'root',
			url: '/',
			templateUrl: 'views/root.html'
		}

		var welcomeState = {
			name: 'root.welcome',
			url: 'welcome',
			controller: 'WelcomeController',
			controllerAs: '$ctrl',
			templateUrl: 'views/welcome.html'
		}

		var newEntryState = {
			name: 'root.newEntry',
			url: 'newEntry',
			templateUrl: 'views/newEntry.html'
		}

		var templateState = {
			name: 'root.template',
			url: 'template',
			templateUrl: 'views/blogTemplate.html'
		}
		$urlRouterProvider.otherwise("/welcome");
		$stateProvider.state(rootState);
		$stateProvider.state(welcomeState);
		$stateProvider.state(newEntryState);
		$stateProvider.state(templateState);
	};

	angular.module('app', ['ui.router', 'ngResource', 'cp.ngConfirm'])
	.config(stateRouter)
	.run();
})();
