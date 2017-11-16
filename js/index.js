(function(){
	var m1=angular.module('myApp', ['ionic'])
	m1.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('tab', {
				url: "/tab",
				abstract: true,
				templateUrl: "templates/tabs.html"
			})
			.state('tab.goods', {
				url: '/goods',
				views: {
					'tab-goods': {
						templateUrl: "templates/goods.html"
					}
				}
			})
			.state('tab.CardHolder', {
				url: '/CardHolder',
				views: {
					'tab-CardHolder': {
						templateUrl: "templates/tab-CardHolder.html"
					}
				}
			})
			.state('tab.Circle', {
				url: '/Circle',
				views: {
					'tab-Circle': {
						templateUrl: "templates/tab-Circle.html"
					}
				}
			})
			.state('tab.More', {
				url: '/More',
				views: {
					'tab-More': {
						templateUrl: "templates/tab-More.html"
					}
				}
			})
		$urlRouterProvider.otherwise('/tab/goods');
		
	});
	

})()
