angular.module('myApp', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('tab', {
			url: "/tab",
			abstract: true,
			templateUrl: "templates/tabs.html"
		})
		.state('tab.MyCard', {
			url: '/MyCard',
			views: {
				'tab-MyCard': {
					templateUrl: "templates/tab-MyCard.html"
				}
			}
		})
		.state("tab.tab-MyCard-sender",{
			url:"/tab-MyCard-sender",
			views: {
				'tab-MyCard': {
					templateUrl: "templates/tab-MyCard-sender.html"
				}
			}
		})
		.state("tab.tab-MyCard-senderDetail",{
			url:"/tab-MyCard-senderDetail",
			views: {
				'tab-MyCard': {
					templateUrl: "templates/tab-MyCard-senderDetail.html"
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
		.state('tab.edit', {
			url: '/edit/:id',
			views: {
				'tab-MyCard': {
					templateUrl: "templates/tab-edit.html"
				}
			}
		})
		.state('news', {
			url: '/news',
			templateUrl: "templates/news.html"
		})
	$urlRouterProvider.otherwise('/tab/MyCard');
});