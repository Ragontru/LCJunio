import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCiudadPage } from './editar-ciudad.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCiudadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCiudadPageRoutingModule {}
