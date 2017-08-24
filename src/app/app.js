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
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', () => new AppDirective())
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
