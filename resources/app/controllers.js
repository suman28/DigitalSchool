
angular.module('controllers.module',['ngMaterial','ui.router','ngAnimate','routes.module','chartsController.module','services.module','filters.module'])
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
}).controller('RightCtrl', function($scope, $timeout, $mdSidenav,$log) {
	$scope.close = function() {
		$mdSidenav('right').close().then(function() {
			$log.debug("close RIGHT is done");
		});
	};
})
//controller for header
.controller('headerCtrl',function($scope,loginFactory){
	 $scope.user = loginFactory.sessionUser;
	// alert($scope.user);
	console.log(loginFactory.sessionUser);
})
//controller for login page
.controller('loginCtrl',function($scope,$state,loginFactory){
		$scope.user = {};
		$scope.loginUser = function(user){

			$scope.user = loginFactory.validUser(user);
			console.log($scope.user.username);

			$state.go('dashboard');
		}
})
//controller for tables page
.controller('tableDemoController',function($scope,paginationFactory){
	//$scope.numbers = [1,2,3,4,5,6,7,8,9,10];

	// $scope.testPromise = function(){
	//
	// 		paginationFactory.testPromise();
	// }

	$scope.currentPage = 0;
	$scope.pageSize = 4;
	$scope.data = [];
	$scope.numberOfPages = function(){
		return Math.ceil($scope.data.length/$scope.pageSize);
	}
	for (var i=0; i<45; i++) {
			 $scope.data.push(i);
	 }


})
//controller for filters page
.controller('filtersDemoCtrl',function($scope){

		 $scope.Example1 = 1;
		 $scope.Example2 = 2;
		 $scope.Example3 = 3;
		 $scope.Example4 = 4;
		 $scope.Example5 = 5;
		 $scope.Example6 = 'six';

		 $scope.example1 = "awesome";
  	 $scope.example2 = "Honorificabilitudinitatibus";


		$scope.languages = [
			{name: 'C#', type : 'static'},
	    {name: 'PHP', type : 'dynamic'},
	    {name: 'Go', type : 'static'},
	    {name: 'JavaScript', type: 'dynamic'},
	    {name: 'Rust', type: 'static'}]


			$scope.currencyExample1 = 66.88;
})
//controller for uiRoutes table
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

})
//controller for directives page
.controller('directivesDemoCtrl',function($scope){
	$scope.name='suman Kotagiri';
	$scope.color = '#333333';
	$scope.reverseMyName = function(){
		$scope.name = $scope.name.split('').reverse().join('');
	}

	$scope.reverseName = function(){
		$scope.name = $scope.name.split('').reverse().join('');
	}

	$scope.randomColor = function(){
         $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16); //to generate random colors
     };
		 $scope.colors =["red","blue","green","yellow"];
})
//controller for services/factories page
.controller('servFactDemoCtrl',function($scope,game,myFactory,crudFactory){
	$scope.title=game.title;
	$scope.sumResult = myFactory.addMethod(3,2);
	$scope.diffResult = myFactory.subtractMethod(3,2);
	$scope.mulResult = myFactory.multiplyMethod(3,2);
	$scope.divResult = myFactory.divideMethod(3,2);


		$scope.squareMethod = function(){
			$scope.result = myFactory.getSquareMethod($scope.number);
		}

		$scope.cubeMethod = function(){
			$scope.result = myFactory.getCubeMethod($scope.number);
		}

		//CRUD functionality starts here...
		$scope.newUser = {};
		$scope.saveContact = function(){
			crudFactory.save($scope.newUser);
			$scope.newUser = {};
		}

		$scope.deleteContact = function(id){

			crudFactory.delete(id);
			if($scope.newUser.id == id)
					$scope.newUser = {};

		}
		$scope.editContact = function(id){
			$scope.newUser  = angular.copy(crudFactory.get(id));
		}
		$scope.clearContact = function(){
			$scope.newUser = {};
		}
		$scope.contacts = crudFactory.list();
})
