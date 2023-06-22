import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditVehiculoPage } from './edit-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: EditVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditVehiculoPageRoutingModule {}
