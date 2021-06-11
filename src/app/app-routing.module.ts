import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ej-array',
    loadChildren: () => import('./ej-array/ej-array.module').then( m => m.EjArrayPageModule)
  },
  {
    path: 'ej-api-rest',
    loadChildren: () => import('./ej-api-rest/ej-api-rest.module').then( m => m.EjApiRestPageModule)
  },
  {
    path: 'editar-ciudad',
    loadChildren: () => import('./editar-ciudad/editar-ciudad.module').then( m => m.EditarCiudadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
