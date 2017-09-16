import * as firebase from 'firebase';

class FirebaseService {
  constructor(){
    'ngInject';
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      storageBucket: 'FIREBASE_STORAGE_BUCKET',
      messagingSenderId: 'FIREBASE_SENDER_ID'
    });
    firebase.auth().signInWithEmailAndPassword(FIREBASE_USER_EMAIL, FIREBASE_USER_PASSWORD).catch(function(error) {
      if(error) {
          console.error('Error Occurred:', error.code, ':', error.message);
      }
    });
    this.db = firebase.database();
    this.firebaseRef = firebase.database().ref('items/');
    // this.firebaseRef.on('value', function(snapshot) {
    // //   updateStarCount(postElement, snapshot.val());
    //     console.log('New Snapshot:', snapshot.val());
    // });
  }

  writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/').push({
      username: name,
      email: email,
      profile_picture : imageUrl
    },(err)=> {
      if(err) {
        console.log('Error>>>', err);
      }
    });
  }

  createItems(itemName, itemPrice, cb) {
      this.firebaseRef.push({
          name: itemName,
          price: itemPrice
      }, (err)=> {
          if(err) {
              console.error('Error:', error.message);
          } else {
              cb();
          }
      })
  }
}

export default FirebaseService;
