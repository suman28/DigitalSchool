
angular.module('controllers.module',['ngMaterial','ui.router','ngAnimate','routes.module','chartsController.module'])
// .controller('AppCtrl',
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
// })
.controller('DialogController', function($scope, $mdDialog){
	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}).controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function() {
		$mdSidenav('left').close().then(function() {
			$log.debug("close LEFT is done");
		});
	};
}).controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function() {
		$mdSidenav('right').close().then(function() {
			$log.debug("close RIGHT is done");
		});
	};
}).controller('loginCtrl',function($scope,$state){
	$scope.loginUser = function(){
		$state.go('dashboard');
	}
})
.controller('tableDemoController',function($scope){
	//$scope.numbers = [1,2,3,4,5,6,7,8,9,10];
	var table = document.getElementById('results');
	var wrappedTable = angular.element(table);
	var rows =  wrappedTable[0].tBodies[0].rows;
	var numOfRecords = rows.length-1;
	var itemsPerPage = 3;
	var currentPage = 1;
	var pages = 0;

  pages = numOfRecords/itemsPerPage;

	var showRecords = function(from,to){
		// this.from =1;
		// this.to =4;
	var count = 0;
	for(var i=1;i<rows.length;i++){
		if(i<from||i>to){

			count++;
			rows[i].style.display='none';
	//		alert("hi"+count);
		}
		else{
			count++;
			rows[i].style.display="";
		//	alert(count);
		}
	}
}
showRecords(5,8);

//var from = (pageNumber - 1) * itemsPerPage + 1;
//var to = from + itemsPerPage - 1;

	//  var rows = table.tBodies[0].rows;
	//  alert(rows.length);
	// var records = (rows.length-1);

//	angular.element(document.getElementById('results').rows);

	 //alert(records);

})
.controller('tableController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'test',
            price: 10000
        },
				{
            name: 'test1',
            price: 2222
        },
        {
            name: 'Adam Gilchrist',
            price: 499
        },
				{
            name: 'test3',
            price: 10000
        },
				{
            name: 'test4',
            price: 2222
        }
    ];

});
