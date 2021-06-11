import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjApiRestPage } from './ej-api-rest.page';

const routes: Routes = [
  {
    path: '',
    component: EjApiRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjApiRestPageRoutingModule {}
