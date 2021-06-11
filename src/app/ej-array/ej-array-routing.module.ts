import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjArrayPage } from './ej-array.page';

const routes: Routes = [
  {
    path: '',
    component: EjArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjArrayPageRoutingModule {}
