'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:butterbar
 * @description
 * # butterbar
 * viewの切り替え時に表示するローディング
 */
angular.module('angularApp')
  .directive('butterbar', ['$rootScope',
    function ($rootScope) {
      return {
        link: function(scope, element, attrs) {
          element.addClass('is-hidden');

          $rootScope.$on('$routeChangeStart', function() {
            element.removeClass('is-hidden');
          });

          $rootScope.$on('$routeChangeSuccess', function() {
            element.addClass('is-hidden');
          });
        }
      };
    }
  ]
);
