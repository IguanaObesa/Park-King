import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCarPageRoutingModule } from './edit-car-routing.module';

import { EditCarPage } from './edit-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCarPageRoutingModule
  ],
  declarations: [EditCarPage]
})
export class EditCarPageModule {}
