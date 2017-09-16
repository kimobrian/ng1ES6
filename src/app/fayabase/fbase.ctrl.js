import * as firebase from 'firebase';

class FirebaseController {
  constructor($scope, firebaseSvc) {
    'ngInject';
    this.url = FIREBASE_DATABASE_URL;
    this.firebaseSvc = firebaseSvc;
    this.errors = {};
    this.$scope = $scope;

    this.firebaseRef = firebase.database().ref('items/');
    this.firebaseRef.on('value', (snapshot)=> {
        this.items = Object.values(snapshot.val());
        $scope.$applyAsync();
    });
  }

  saveData() {
      this.errors = {};
      if(!this.name) {
          this.errors.name = "Item Name Required";
      }
      if(!this.price) {
          this.errors.price = "Item Price Required";
      }
      if(Object.keys(this.errors).length) {
          return;
      }
      this.firebaseSvc.createItems(this.name, this.price, () => {
          this.name = '';
          this.price = '';
          this.$scope.$applyAsync();
      });
  }
}

module.exports = FirebaseController;
