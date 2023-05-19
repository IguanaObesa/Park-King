import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MapaComponent } from '../components/mapa/mapa.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { ViajeComponent } from '../components/viaje/viaje.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'perfil',
        component: PerfilComponent
      },
      {
        path:'mapa',
        component: MapaComponent
      },
      {
        path:'viaje',
        component: ViajeComponent
      },
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
