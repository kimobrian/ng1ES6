import angular from 'angular';
import ngResource from 'angular-resource';
import HttpService from './http.svc';
import HttpComponent from './http.component';
import HttpController from './http.ctrl';


var httpApp = angular.module('httpApp', [ngResource])
    .service('httpSvc', HttpService)
    .controller('HttpCtrl', HttpController)
    .component('httpComponent', HttpComponent)
    .name;

export default httpApp;
