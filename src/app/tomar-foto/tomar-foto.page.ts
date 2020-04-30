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

  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private FS: FirebaseStorageService) { }

  ngOnInit() {
  }
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    })

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    //this.FS.referenciaCloudStorage(this.photo['id'])
    console.log( this.photo );
    // Para el id utilizo el uid y un numero incremental que es la suma de la cantidad de archivos + 1

    //this.FS.tareaCloudStorage()
  }

  
}
