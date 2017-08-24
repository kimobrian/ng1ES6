import angular from 'angular';
import MathModule from './math';
import uiRouter from 'angular-ui-router';
import '../style/app.scss';

class AppDirective {
    constructor() {
        this.restrict = 'E';
        this.template = require('./app.html');
        this.controller = 'AppCtrl';
        this.controllerAs = 'app'
    }
}

class AppCtrl {
  constructor(mathSvc) {
      'ngInject'
      this.mathSvc = mathSvc;
      this.url = 'https://github.com/kimobrian/ng1ES6';
  }

  $onInit() {
      this.a = 'John';
      this.b = 'Doe';
      this.fullName = this.a + ' '+ this.b;
  }

  $doCheck() {
      var previousValue;
      var currentValue = this.a + ' '+ this.b;
      if (previousValue !== currentValue) {
        this.fullName = this.a + ' '+ this.b;
        previousValue = currentValue;
      }
  }
}

let testComponent = {
    template: '<p>This is a test component</p>'
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [MathModule.name, uiRouter])
  .directive('app', () => new AppDirective())
  .component('test', testComponent)
  .controller('AppCtrl', AppCtrl)
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
             .state('home', {
                url: '/home',
                component: 'mathComponent'
            })
            .state('test', {
                url:'/test',
                component: 'test'
            })
      $urlRouterProvider.otherwise('/home')
  })

export default MODULE_NAME;
