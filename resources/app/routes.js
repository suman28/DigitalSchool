angular.module('routes.module',['ui.router']).config(['$stateProvider','$urlRouterProvider','$locationProvider',
function($stateProvider, $urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
   .state('/',{
        url:'/',
        templateUrl:'./resources/views/login.html'
   })
  .state('dashboard',{
          url: '/dashboard',
          templateUrl: './resources/views/dashboard.html'
  })
  .state('dashboard.list',{
    url:'/list',
    templateUrl:'./resources/views/testPage.html',
    controller:function($scope){
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })

  .state('dashboard.paragraph',{
    url:'/para',
    template:'This is a paragraph'
  })
  .state('login',{
          url: '/login',
          templateUrl: './resources/views/login.html'
  })
  .state('register',{
          url: '/register',
          templateUrl: './resources/views/register.html'
  })
  .state('tables',{
    url:'/tables',
    templateUrl:'./resources/views/tablesDemo.html'
  })
  .state('filters',{
    url:'/filters',
    templateUrl:'./resources/views/filtersDemo.html'
  })
  .state('directives',{
    url:'/directives',
    templateUrl:'./resources/views/directivesDemo.html'
  })
  .state('services',{
    url:'/services',
    templateUrl:'./resources/views/servFactDemo.html'
  })
  .state('about',{
    url:'/about',
    views:{
      // the main template will be placed here (relatively named)
          '': { templateUrl: './resources/views/uiRoutes.html' },
          // the child views will be defined here (absolutely named)
          'columnOne@about': { template: 'Look I am a column!' },
          'columnTwo@about':{
            templateUrl:'./resources/views/table-data.html',
            controller:'tableController'
          }
    }

  })
  

}]);
