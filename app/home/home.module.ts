import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { MapaComponent } from '../components/mapa/mapa.component';
import { ViajeComponent } from '../components/viaje/viaje.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PerfilComponent,ViajeComponent,MapaComponent]
})
export class HomePageModule {}
