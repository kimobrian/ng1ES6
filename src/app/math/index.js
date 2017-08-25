import MathController from './math.ctrl';
import MathComponent from './math.component';
import MathService from  './math.svc';
import angular from 'angular';

let math =  angular.module('math', [])
    .component('mathComponent', MathComponent)
    .service('mathSvc', MathService)
    .controller('mathCtrl', MathController)

export default math.name;
