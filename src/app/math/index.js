import MathController from './math.ctrl';
import MathComponent from './math.component';
import MathService from  './math.svc';
import angular from 'angular';

let app =  angular.module('math', [])
    .component('mathComponent', MathComponent)
    .service('mathSvc', MathService)
    .controller('mathCtrl', MathController)

module.exports = app;
