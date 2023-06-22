import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehiculoPage } from './add-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVehiculoPageRoutingModule {}
