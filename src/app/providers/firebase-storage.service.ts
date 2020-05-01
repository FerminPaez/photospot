import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class FirebaseStorageService {

  private CARPETA_IMAGENES = 'ímg';

  constructor(
    private db: AngularFirestore
    ) {

    }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    //const storageRef = firebase.storage().ref();
//
    //for (const item of imagenes) {
    //  item.isUploading = true;
    //  if (item.progress >= 100){
    //    continue;
    //  }
//
    //  const uploadTask: firebase.storage.UploadTask = 
    //    storageRef.child(`${this.CARPETA_IMAGENES}/${item.fileName}`)
    //    .put(item.file);
//
    //  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //    (snapshot: firebase.storage.UploadTaskSnapshot) =>
    //      item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes) * 100,
    //    ( error ) => console.log('Error al subir ', error),
    //    // tslint:disable-next-line: no-unused-expression
    //    () => {
    //      console.log('Imagen cargada correctamente');
    //      // tslint:disable-next-line: deprecation
    //      //item.url = uploadTask.snapshot.downloadURL;
    //      item.isUploading = false;
    //      this.guardarImagen({
    //        nombre : item.fileName,
    //        url: item.url
    //      });
    //    });
//
//
    //}
  }

  private guardarImagen( imagen : {nombre: string, url: string}){
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
      .add(imagen);
  }

}






