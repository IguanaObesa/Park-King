import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabledPage } from './unabled.page';

const routes: Routes = [
  {
    path: '',
    component: UnabledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabledPageRoutingModule {}
