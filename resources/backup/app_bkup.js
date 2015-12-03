

var app = angular.module('myApp', ['ngMaterial','ui.router','ngAnimate','routes.module','controllers.module']);


app.config(['$mdThemingProvider','$mdIconProvider','$stateProvider','$urlRouterProvider','$locationProvider', function($mdThemingProvider, $mdIconProvider,$stateProvider, $urlRouterProvider,$locationProvider) {

	  // $urlRouterProvider.otherwise('/');
		//
		// $stateProvider
		//  .state('/',{
		//  			url:'/',
		//  			templateUrl:'./resources/views/login.html'
		//  })
		// .state('dashboard',{
		// 				url: '/dashboard',
    //         templateUrl: './resources/views/dashboard.html'
		// })
		// .state('dashboard.list',{
		// 	url:'/list',
		// 	templateUrl:'./resources/views/testPage.html',
		// 	controller:function($scope){
		// 		$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
		// 	}
		// })
		// .state('dashboard.paragraph',{
		// 	url:'/para',
		// 	template:'This is a paragraph'
		// })
		// .state('login',{
		// 				url: '/login',
    //         templateUrl: './resources/views/login.html'
		// })
		// .state('register',{
		// 				url: '/register',
		// 				templateUrl: './resources/views/register.html'
		// })
		// .state('about',{
		// 	url:'/about',
		// 	views:{
		// 		// the main template will be placed here (relatively named)
    //         '': { templateUrl: './resources/views/uiRoutes.html' },
		// 				// the child views will be defined here (absolutely named)
    //         'columnOne@about': { template: 'Look I am a column!' },
		// 				'columnTwo@about':{
		// 					templateUrl:'./resources/views/table-data.html',
		// 					controller:'tableController'
		// 				}
		//
		// 	}
		// });

		// set HTML5 history API
		// $locationProvider.html5Mode(true);

    //-------------------------------------CUSTOM THEME-----------------------------------------

	  //Extending Blue Palette
    //Getting the angular material blue theme and customize them -intead of creating new
	  var inboxBlue = $mdThemingProvider.extendPalette('blue', {'500': '3c80f6'});

	  //Defining Inbox Blue Palette
	  $mdThemingProvider.definePalette('inboxBlue', inboxBlue);


	  //Setting Application Theme
	  $mdThemingProvider.theme('default')
						  .primaryPalette('inboxBlue')
						  .accentPalette("pink")
						  .warnPalette("red");

    //-------------------------------------CUSTOM THEME-----------------------------------------


    //-------------------------------------ICON CONFIG-----------------------------------------
    $mdIconProvider
        .iconSet('action', '../resources/iconsets/action-icons.svg', 24)
        .iconSet('alert', '../resources/iconsets/alert-icons.svg', 24)
        .iconSet('av', '../resources/iconsets/av-icons.svg', 24)
        .iconSet('communication', '../resources/iconsets/communication-icons.svg', 24)
        .iconSet('content', '../resources/iconsets/content-icons.svg', 24)
        .iconSet('device', '../resources/iconsets/device-icons.svg', 24)
        .iconSet('editor', '../resources/iconsets/editor-icons.svg', 24)
        .iconSet('file', '../resources/iconsets/file-icons.svg', 24)
        .iconSet('hardware', '../resources/iconsets/hardware-icons.svg', 24)
        .iconSet('icons', '../resources/iconsets/icons-icons.svg', 24)
        .iconSet('image', '../resources/iconsets/image-icons.svg', 24)
        .iconSet('maps', '../resources/iconsets/maps-icons.svg', 24)
        .iconSet('navigation', '../resources/iconsets/navigation-icons.svg', 24)
        .iconSet('notification', '../resources/iconsets/notification-icons.svg', 24)
        .iconSet('social', '../resources/iconsets/social-icons.svg', 24)
        .iconSet('toggle', '../resources/iconsets/toggle-icons.svg', 24);

      //-------------------------------------ICON CONFIG-----------------------------------------


}]);


//
// app.controller('AppCtrl',
// 		function($scope, $timeout, $mdSidenav, $mdUtil, $log,$mdDialog) {
//
// 			/**************************SideNav [LEFT & RIGHT]********************************/
//
// 			$scope.toggleLeft = buildToggler('left');
// 			$scope.toggleRight = buildToggler('right');
// 			/**
// 			 * Build handler to open/close a SideNav; when animation finishes
// 			 * report completion in console
// 			 */
// 			function buildToggler(navID) {
// 				var debounceFn = $mdUtil.debounce(function() {
// 					$mdSidenav(navID).toggle().then(function() {
// 						$log.debug("toggle " + navID + " is done");
// 					});
// 				}, 300);
// 				return debounceFn;
// 			}
//
// 			/************************** /SideNav [LEFT & RIGHT]********************************/
//
//
// 		$scope.showAdd = function(ev){
// 			$mdDialog.show({
// 					controller:'DialogController',
// 					templateUrl: './resources/views/tabDialog.tmpl.html',
// 					parent: angular.element(document.body),
// 					targetEvent: ev,
// 					clickOutsideToClose:true
// 				})
// 			}
// 			var chart = c3.generate({
// 		    bindto: '#chart',
// 				data: {
// 					 // all of data will be hidden
// 					 //hide: true,
// 						labels: false,
// 			        columns: [
// 			            ['data1', 300, 350, 300, 50, 100, 550],
// 			            ['data2', 130, 100, 140, 200, 150, 50]
// 			        ],
// 							// colors: {
// 						  //   data1: '#009688',
// 						  //   data2:'#2962FF'
// 						  // },
// 			        types: {
// 			            data1: 'area-spline',
// 			            data2: 'area-spline'
// 			        },
//
//
// 			    },
// 					axis: {
// 					  x: {
// 					    show: false
// 					  },
// 						y: {
// 							show: false
// 						}
// 					},
// 				});
//
//
//
// 		var chart2 = c3.generate({
// 			bindto: '#chart2',
// 			data: {
// 				columns: [
// 					['data1', 30, 200, 100, 400, 150, 250],
// 					['data2', 50, 20, 10, 40, 15, 25]
// 				],
//
// 			types: {
// 					data1: 'step',
// 					data2: 'area-step'
// 			}
// 			},
// 			axis: {
// 				x: {
// 					show: false
// 				},
// 				y: {
// 					show: false
// 				}
// 			}
// 		});
//
//
// 		chart2.resize({
// 			 height: 200,
// 				width: 400
// 		});
//
// 		var chart3 = c3.generate({
// 			bindto: '#chart3',
// 			data: {
// 				columns: [
// 					['data1', 30, 200, 100, 400, 150, 250],
// 					['data2', 50, 20, 10, 40, 15, 25]
// 				],
// 				type:'bar'
// 			},
// 			axis: {
// 				x: {
// 					show: false
// 				},
// 				y: {
// 					show: false
// 				}
// 			}
// 		});
//
//
// 				chart3.resize({
// 				height: 200,
// 						width: 400
// 				});
//
//
// 				var chart4 = c3.generate({
// 					bindto: '#chart4',
// 					data: {
// 						columns: [
// 							['data1', 30, 200, 100, 400, 150, 250],
// 							['data2', 50, 20, 10, 40, 15, 25]
// 						],
// 						type: 'donut'
// 					},
// 					axis: {
// 						x: {
// 							show: false
// 						},
// 						y: {
// 							show: false
// 						}
// 					}
// 				});
// 						chart4.resize({
// 							height: 200,
// 							width: 400
// 						});
//
// });
// app.controller('DialogController', function($scope, $mdDialog){
// 	$scope.cancel = function() {
// 		$mdDialog.cancel();
// 	};
//
// })
//
//
// app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
// 	$scope.close = function() {
// 		$mdSidenav('left').close().then(function() {
// 			$log.debug("close LEFT is done");
// 		});
// 	};
// });
//
// app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
// 	$scope.close = function() {
// 		$mdSidenav('right').close().then(function() {
// 			$log.debug("close RIGHT is done");
// 		});
// 	};
// });
//
// app.controller('loginCtrl',function($scope,$state){
// 	$scope.loginUser = function(){
// 		$state.go('dashboard');
// 	}
// })
//
//
// app.controller('tableDemoController',function($scope){
// 	//$scope.numbers = [1,2,3,4,5,6,7,8,9,10];
// 	var table = document.getElementById('results');
// 	var wrappedTable = angular.element(table);
// 	var rows =  wrappedTable[0].tBodies[0].rows;
// 	var numOfRecords = rows.length-1;
// 	var itemsPerPage = 3;
// 	var currentPage = 1;
// 	var pages = 0;
// //	alert("total number of records"+numOfRecords);
//   pages = numOfRecords/itemsPerPage;
//
// //	alert("number of pages"+page);
//
//
// 	// var from = 9;
// 	// var to = 12;
//
// 	var showRecords = function(from,to){
// 		// this.from =1;
// 		// this.to =4;
// 	var count = 0;
// 	for(var i=1;i<rows.length;i++){
// 		if(i<from||i>to){
//
// 			count++;
// 			rows[i].style.display='none';
// 	//		alert("hi"+count);
// 		}
// 		else{
// 			count++;
// 			rows[i].style.display="";
// 		//	alert(count);
// 		}
// 	}
// }
// showRecords(5,8);
//
// var from = (pageNumber - 1) * itemsPerPage + 1;
// var to = from + itemsPerPage - 1;
//
// 	//  var rows = table.tBodies[0].rows;
// 	//  alert(rows.length);
// 	// var records = (rows.length-1);
//
// //	angular.element(document.getElementById('results').rows);
//
// 	 //alert(records);
//
// })
// app.controller('tableController', function($scope) {
//
//     $scope.message = 'test';
//
//     $scope.scotches = [
//         {
//             name: 'Macallan 12',
//             price: 50
//         },
//         {
//             name: 'Chivas Regal Royal Salute',
//             price: 10000
//         },
//         {
//             name: 'test',
//             price: 10000
//         },
// 				{
//             name: 'test1',
//             price: 2222
//         },
//         {
//             name: 'Adam Gilchrist',
//             price: 499
//         },
// 				{
//             name: 'test3',
//             price: 10000
//         },
// 				{
//             name: 'test4',
//             price: 2222
//         },
//         // {
//         //     name: 'Sachin Tendulkar',
//         //     price: 499
//         // },
// 				// {
// 				// 		name: 'test11',
// 				// 		price: 1499
// 				// },
// 				// {
// 				// 		name: 'test10',
// 				// 		price: 5600
// 				// },
// 				// {
// 				// 		name: 'test12',
// 				// 		price: 6777
// 				// },
// 				// {
// 				// 		name: 'test13',
// 				// 		price: 8989
// 				// },
// 				// {
//         //     name: 'Sachin',
//         //     price: 499
//         // },
// 				// {
// 				// 		name: 'test15',
// 				// 		price: 1499
// 				// },
// 				// {
// 				// 		name: 'test16',
// 				// 		price: 5600
// 				// },
// 				// {
// 				// 		name: 'test17',
// 				// 		price: 6777
// 				// },
// 				// {
// 				// 		name: 'test18',
// 				// 		price: 8989
// 				// }
//     ];
//
// });
