import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnabledPage } from './enabled.page';

const routes: Routes = [
  {
    path: '',
    component: EnabledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnabledPageRoutingModule {}
