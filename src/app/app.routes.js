angular.module('app')

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dash/home');

    $stateProvider
      // Dash
      .state('dash', {
        url: '/dash',
        abstract: true,
        templateUrl: '/templates/pages/dash/dash.html',
        controller: 'DashController',
        controllerAs: 'dash',
      })
      .state('dash.home', {
        url: '/home',
        templateUrl: '/templates/pages/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
      })
      .state('dash.projects', {
        url: "/projects",
        templateUrl: '/templates/pages/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projects',
      })
      .state('dash.settings', {
        url: "/settings",
        templateUrl: '/templates/pages/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings',
      })

      // Editor
      .state('editor', {
        url: "/editor",
        templateUrl: '/templates/pages/editor/editor.html',
        controller: 'EditorController',
        controllerAs: 'editor',
      })
      .state('editor.editnode', {
        url: "/node/:name",
        templateUrl: '/templates/pages/editor/modals/editnode.html',
        controller: 'EditNodeController',
        controllerAs: 'editnode',
      })
      .state('editor.export', {
        url: "/export/:type/:format",
        templateUrl: '/templates/pages/editor/modals/export.html',
        controller: 'ExportController',
        controllerAs: 'export',
      })
      .state('editor.import', {
        url: "/import/:type/:format",
        templateUrl: '/templates/pages/editor/modals/import.html',
        controller: 'ImportController',
        controllerAs: 'import',
      });
    }
]);