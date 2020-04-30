import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable()
export class LoginServiceService {

    constructor(private router: Router, private auth: AngularFireAuth) {
          if ( localStorage.getItem('uid') && localStorage.getItem('usuario') ) {
            this.router.navigateByUrl('/tabs/tab1');
          }
       }

    login(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).then((objeto) => {
          console.log(objeto.user.uid);
          localStorage.setItem('uid', objeto.user.uid);
          localStorage.setItem('usuario', objeto.user.displayName);
          console.log(this.router.url);
          console.log(localStorage.getItem('iud') + ' nombre de usuario ' + localStorage.getItem('usuario'));
          this.router.navigateByUrl('/tabs/tab1');
          return true;
        })
        .catch((error) => {

            return false;
          });

    }

    loginWithGoogle() {

        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((datos) => {
          console.log(datos.user.displayName);
          console.log(datos.user.uid);
          localStorage.setItem('usuario', datos.user.displayName);
          localStorage.setItem('uid', datos.user.uid);
          localStorage.setItem('profilePicture', datos.user.photoURL)
          this.router.navigateByUrl('/tabs/tab1');
          
        });

    }

    register(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => true)
        .catch((error) => {
            // Handle Errors here.

            console.log('ocurrio el siguiente problema: ' + error + error.code);
            return false;
            // ...
          });

    }
    logout() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });

    }
}
