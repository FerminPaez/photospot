import { Component } from '@angular/core';
import { FirebaseStorageService } from '../providers/firebase-storage.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private fsb: FirebaseStorageService) {
  }
  public photo = localStorage.getItem('profilePicture');
  public name  = localStorage.getItem('usuario');

}
