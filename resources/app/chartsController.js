angular.module('chartsController.module',['ngMaterial','ui.router'])
.controller('AppCtrl',
		function($scope, $timeout, $mdSidenav, $mdUtil, $log,$mdDialog) {

			/**************************SideNav [LEFT & RIGHT]********************************/

			$scope.toggleLeft = buildToggler('left');
			$scope.toggleRight = buildToggler('right');
			/**
			 * Build handler to open/close a SideNav; when animation finishes
			 * report completion in console
			 */
			function buildToggler(navID) {
				var debounceFn = $mdUtil.debounce(function() {
					$mdSidenav(navID).toggle().then(function() {
						$log.debug("toggle " + navID + " is done");
					});
				}, 300);
				return debounceFn;
			}

			/************************** /SideNav [LEFT & RIGHT]********************************/


		$scope.showAdd = function(ev){
			$mdDialog.show({
					controller:'DialogController',
					templateUrl: './resources/views/tabDialog.tmpl.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose:true
				})
			}
			var chart = c3.generate({
		    bindto: '#chart',
				data: {
					 // all of data will be hidden
					 //hide: true,
						labels: false,
			        columns: [
			            ['data1', 300, 350, 300, 50, 100, 550],
			            ['data2', 130, 100, 140, 200, 150, 50]
			        ],
							// colors: {
						  //   data1: '#009688',
						  //   data2:'#2962FF'
						  // },
			        types: {
			            data1: 'area-spline',
			            data2: 'area-spline'
			        },


			    },
					axis: {
					  x: {
					    show: false
					  },
						y: {
							show: false
						}
					},
				});



		var chart2 = c3.generate({
			bindto: '#chart2',
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				],

			types: {
					data1: 'step',
					data2: 'area-step'
			}
			},
			axis: {
				x: {
					show: false
				},
				y: {
					show: false
				}
			}
		});


		chart2.resize({
			 height: 200,
				width: 400
		});

		var chart3 = c3.generate({
			bindto: '#chart3',
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				],
				type:'bar'
			},
			axis: {
				x: {
					show: false
				},
				y: {
					show: false
				}
			}
		});


				chart3.resize({
				height: 200,
						width: 400
				});


				var chart4 = c3.generate({
					bindto: '#chart4',
					data: {
						columns: [
							['data1', 30, 200, 100, 400, 150, 250],
							['data2', 50, 20, 10, 40, 15, 25]
						],
						type: 'donut'
					},
					axis: {
						x: {
							show: false
						},
						y: {
							show: false
						}
					}
				});
						chart4.resize({
							height: 200,
							width: 400
						});

})
