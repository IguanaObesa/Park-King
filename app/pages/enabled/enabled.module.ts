import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnabledPageRoutingModule } from './enabled-routing.module';

import { EnabledPage } from './enabled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnabledPageRoutingModule
  ],
  declarations: [EnabledPage]
})
export class EnabledPageModule {}
