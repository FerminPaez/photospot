import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-cargar-foto',
  templateUrl: './cargar-foto.page.html',
  styleUrls: ['./cargar-foto.page.scss'],
})
export class CargarFotoPage implements OnInit {

  constructor(    private router: Router, private TP: TabsPage
    ) { }

  ngOnInit() {
  }
  volver(){
    this.router.navigateByUrl('/tabs/tab1');
    this.TP.loadingPhoto = false;

  }

}
