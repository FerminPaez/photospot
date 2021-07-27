import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  login = false;
  loadingPhoto = false;

  constructor(
    public router: Router
  ) {
    this.noLogin();
  }

  noLogin() {
    if (this.router.url === '/tabs/login') {
      this.login = false;
      console.log(this.login);
      console.log(this.router.url);
    } else {
      this.login = true;
      console.log(this.login);
    }
  }

  cargarFoto() {
    this.router.navigateByUrl('/tabs/cargar-foto');
    this.loadingPhoto = true;
  }


}
