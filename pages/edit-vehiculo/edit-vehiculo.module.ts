import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVehiculoPageRoutingModule } from './edit-vehiculo-routing.module';

import { EditVehiculoPage } from './edit-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVehiculoPageRoutingModule
  ],
  declarations: [EditVehiculoPage]
})
export class EditVehiculoPageModule {}
