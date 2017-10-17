import * as firebase from 'firebase';

class FirebaseController {
  constructor($scope, firebaseSvc) {
    'ngInject';
    this.url = FIREBASE_DATABASE_URL;
    this.firebaseSvc = firebaseSvc;
    this.errors = {};
    this.$scope = $scope;

    this.firebaseRef = firebase.database().ref('items/others/');
    this.firebaseRef.on('value', (snapshot)=> {
        this.items = snapshot.val();
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

  removeItem(itemIndex) {
      this.firebaseSvc.removeItem(itemIndex, ()=> {
          console.log('<Deleted>');
      });
  }

  toggleEdit(key) {
      this.editing = key;
  }

  updateItem(evt,key) {
      if(evt.which === 13) {
          this.firebaseRef.child(key).update({ name: evt.target.value }).then(()=>{
              this.editing = false;
              this.$scope.$applyAsync();
          })
      }
  }
}

module.exports = FirebaseController;
