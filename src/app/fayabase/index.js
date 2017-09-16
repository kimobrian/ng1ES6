import angular from 'angular';
import FirebaseService from './fbase.svc';
import FirebaseComponent from './fbase.component';
import FirebaseController from './fbase.ctrl';

var firebaseApp = angular.module('firebaseApp', [])
  .service('firebaseSvc', FirebaseService)
  .controller('FirebaseCtrl', FirebaseController)
  .component('firebaseComponent', FirebaseComponent)
  .name;

export default firebaseApp;
