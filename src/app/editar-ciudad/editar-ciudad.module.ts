import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCiudadPageRoutingModule } from './editar-ciudad-routing.module';

import { EditarCiudadPage } from './editar-ciudad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditarCiudadPageRoutingModule
  ],
  declarations: [EditarCiudadPage]
})
export class EditarCiudadPageModule {}
