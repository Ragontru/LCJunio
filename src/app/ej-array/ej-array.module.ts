import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjArrayPageRoutingModule } from './ej-array-routing.module';

import { EjArrayPage } from './ej-array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjArrayPageRoutingModule
  ],
  declarations: [EjArrayPage]
})
export class EjArrayPageModule {}
