import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {

  constructor(public firestore: AngularFirestore) {

  }

// CRUD USUARIOS
  public createUser(data: {
    nombre: string,
    email: string,
    profilePicture: string,
    photos?: [{
        photoURL: string,
        spot: {
          latitud: number,
          longitud: number
        }
      }]
     }) {
      return this.firestore.collection('usuarios').add(data);
  }

  public getUser(userID: string) {
    return this.firestore.collection('usuarios').doc(userID).snapshotChanges;
  }

  public getUsers() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  public updateUser(userID, data: any) {
    return this.firestore.collection('usuarios').doc(userID).set(data);
  }

// SECCION FOTOS
}
