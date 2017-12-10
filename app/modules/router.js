function config($stateProvider, $httpProvider, $urlRouterProvider) {

   	$httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = {Accept: "application/json, text/plain, */**"};
    $httpProvider.defaults.headers.post = {"Content-Type": "application/json;charset=utf-8"};
    $urlRouterProvider.otherwise('dashboard');
	
	
    $stateProvider
    .state('main', {
        url: '/',
        abstract: true,
        controller: 'MainCtrl as vm',
        templateUrl: 'modules/commons/views/main.html'
    })
    .state('main.dashboard', {
        url: 'dashboard',
        controller: 'DashCtrl as vm',
        templateUrl: 'modules/todo/views/dash.html'
    })
	.state('main.todo', {
            url: 'todo',
            controller: 'TodoCtrl as vm',
            templateUrl: 'modules/todo/views/todo.html'
    })
	 .state('main.todo-create', {
            url: 'todo/create',
            controller: 'TodoCreateCtrl as vm',
            templateUrl: 'modules/todo/views/todo.create.html'
    })   
    
}
angular.module('todoApp').config(config);

