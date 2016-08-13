app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/game');
	
    $stateProvider
	.state('game', {
		url: '/game',
		templateUrl: 'app/views/game/game.html',
		controller: 'gameController',
		controllerAs: 'vm'
	});
});
