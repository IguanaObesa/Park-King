import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabledPageRoutingModule } from './unabled-routing.module';

import { UnabledPage } from './unabled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabledPageRoutingModule
  ],
  declarations: [UnabledPage]
})
export class UnabledPageModule {}
