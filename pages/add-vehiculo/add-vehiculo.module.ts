import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVehiculoPageRoutingModule } from './add-vehiculo-routing.module';

import { AddVehiculoPage } from './add-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVehiculoPageRoutingModule
  ],
  declarations: [AddVehiculoPage]
})
export class AddVehiculoPageModule {}
