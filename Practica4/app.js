var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', { url: '/',
            views: {'top': { templateUrl: 'top.html', controller: 'topController'},
                    'mid': { templateUrl: 'mid.html'},
                    'bot': { templateUrl: 'bot.html'} }
    })
    .state('app.suscrito', { url: 'suscritas',
            views: { 'top@': { templateUrl: 'topListasSuscrito.html'},
                     'mid@': { templateUrl: 'listasSuscrito.html'},
                     'bot@': {templateUrl: 'botListasSuscrito.html'}}
    })
    .state('app.buscar', { url: 'buscar',
            views: { 'top@': { templateUrl: 'topBuscar.html'},
                     'mid@': { templateUrl: 'listasBuscar.html'},
                     'bot@': {templateUrl: 'botBuscar.html'}}
    })
    .state('app.datos', { url: 'misDatos',
            views: { 'top@': { templateUrl: 'topDatos.html'},
                     'mid@': { templateUrl: 'listasDatos.html'},
                     'bot@': {templateUrl: 'botDatos.html'}}
    })
    .state('app.listaCompra', { url: 'lista/listaDeLaCompra',
            views: { 'top@': { templateUrl: 'topCompra.html'},
                     'mid@': { templateUrl: 'listasCompra.html'},
                     'bot@': {templateUrl: 'botCompra.html'}}
    });
    $urlRouterProvider.otherwise('/');
});

