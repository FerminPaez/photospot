import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CameraResultType } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})

export class FirebaseStorageService {

  // private CARPETA_IMAGENES = 'ímg';
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  profileUrl: Observable<string | null>;



  constructor(private storage: AngularFireStorage) {
    console.log(storage);
    }
    uploadFile(event,path) {
      //const file = event.target.files[0];
      //console.log(event['changingThisBreaksApplicationSecurity'].blob());
      const file = event;//['changingThisBreaksApplicationSecurity'];

      const filePath = path;
      const fileRef = this.storage.ref(filePath);

      const task = this.storage.upload(filePath, file);
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe();
      console.log(this.downloadURL);
  }
  downloadFile(fotos) {
    const ref = this.storage.ref(fotos);
    this.profileUrl = ref.getDownloadURL();
  }








}






