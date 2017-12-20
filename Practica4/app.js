var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', { url: '/',
            views: {'top': { templateUrl: 'top.html', controller: 'topController'},
                    'mid': { templateUrl: 'mid.html', controller: 'midController'},
                    'bot': { templateUrl: 'bot.html', controller: 'botController'} }
    })
    .state('app.suscrito', { url: 'suscritas',
            views: { 'mid@': { templateUrl: 'listasSuscrito.html'},
                     'bot@': {templateUrl: 'botListasSuscrito.html'}}
    });
    $urlRouterProvider.otherwise('/');
});

