import { Component, OnInit } from '@angular/core';
// Camara y Fotos
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FirebaseStorageService } from '../providers/firebase-storage.service';



export interface Item { name: string; }

@Component({
  selector: 'app-tomar-foto',
  templateUrl: './tomar-foto.page.html',
  styleUrls: ['./tomar-foto.page.scss'],
})
export class TomarFotoPage implements OnInit {

  photo
  path;
  blob;
  base64;
  base64String;
  constructor(private sanitizer: DomSanitizer, public FS: FirebaseStorageService) { }

  ngOnInit() {
  }
  
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    })
    console.log(image);
    
    this.path = image.webPath;
    this.photo = image
    this.base64 = await fetch(this.photo);
    const base64Response = await fetch(`data:image/jpeg;base64,${this.photo}`)
    this.blob = await base64Response.blob();

    //this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    //this.photo = image;
    //this.FS.referenciaCloudStorage(this.photo['id'])
    console.log( this.photo );

    var convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
      const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
          resolve(reader.result);
      };
      reader.readAsDataURL(blob);
  });
  
    this.base64String = await convertBlobToBase64(this.blob);
    //console.log(this.photo['changingThisBreaksApplicationSecurity'])
    
    // Para el id utilizo el uid y un numero incremental que es la suma de la cantidad de archivos + 1

    //this.FS.tareaCloudStorage()
  }


  subirfoto(){
    console.log(this.photo);
    this.FS.uploadFile(this.base64String, this.path);

  }
  
}
