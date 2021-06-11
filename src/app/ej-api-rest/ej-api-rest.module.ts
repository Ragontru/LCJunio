import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EjApiRestPageRoutingModule } from './ej-api-rest-routing.module';
import { EjApiRestPage } from './ej-api-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EjApiRestPageRoutingModule
  ],
  declarations: [EjApiRestPage]
})
export class EjApiRestPageModule { }
