import angular from 'angular';
import MathModule from './math';
import uiRouter from 'angular-ui-router';
import FirebaseModule from './fayabase'
import '../style/app.scss';

let appComponent = {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
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

      this.c = 5;
      this.d =10;
      this.product = this.mathSvc.product(this.c, this.d);
  }

  $doCheck() {
      this.fullName = this.a + ' '+ this.b;
      this.product = this.mathSvc.product(this.c, this.d);
  }
}

let testComponent = {
    template: '<p>This is a test component</p>'
}

let app = angular.module("app", [MathModule, uiRouter, FirebaseModule])
  .component('app', appComponent)
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
            .state('fbase', {
                url:'/fbase',
                component: 'firebaseComponent'
            })
      $urlRouterProvider.otherwise('/home')
  })

export default app.name;
