import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { viajesProgramadosPage } from './viajes-programados.page';

const routes: Routes = [
  {
    path: '',
    component: viajesProgramadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesProgramadosPageRoutingModule {}
