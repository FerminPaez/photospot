import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cargar-foto',
    loadChildren: () => import('./cargar-foto/cargar-foto.module').then( m => m.CargarFotoPageModule)
  },
  {
    path: 'tomar-foto',
    loadChildren: () => import('./tomar-foto/tomar-foto.module').then( m => m.TomarFotoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
