import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarFotoPageRoutingModule } from './cargar-foto-routing.module';

import { CargarFotoPage } from './cargar-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarFotoPageRoutingModule
  ],
  declarations: [CargarFotoPage]
})
export class CargarFotoPageModule {}
