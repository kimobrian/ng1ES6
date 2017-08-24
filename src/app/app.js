import angular from 'angular';

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
  constructor() {

  }

  $onInit() {
      this.url = 'https://github.com/kimobrian/ng1ES6';
  }
}

const MODULE_NAME = 'app';

let app = angular.module(MODULE_NAME, [])
  .directive('app', () => new AppDirective())
  .controller('AppCtrl', AppCtrl);

export default app;
