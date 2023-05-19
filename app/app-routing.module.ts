import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'edit-vehiculo',
    loadChildren: () => import('./pages/edit-vehiculo/edit-vehiculo.module').then( m => m.EditVehiculoPageModule)
  },
  {
    path: 'info-viaje',
    loadChildren: () => import('./pages/info-viaje/info-viaje.module').then( m => m.InfoViajePageModule)
  },
  {
    path: 'viajes-programados',
    loadChildren: () => import('./pages/viajes-programados/viajes-programados.module').then( m => m.ViajesProgramadosPageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pages/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'edit-perfil',
    loadChildren: () => import('./pages/edit-perfil/edit-perfil.module').then( m => m.EditPerfilPageModule)
  },
  {
    path: 'enabled',
    loadChildren: () => import('./pages/enabled/enabled.module').then( m => m.EnabledPageModule)
  },
  {
    path: 'unabled',
    loadChildren: () => import('./pages/unabled/unabled.module').then( m => m.UnabledPageModule)
  },
  {
    path: 'add-vehiculo',
    loadChildren: () => import('./pages/add-vehiculo/add-vehiculo.module').then( m => m.AddVehiculoPageModule)
  },
  {
    path: 'edit-car',
    loadChildren: () => import('./pages/edit-car/edit-car.module').then( m => m.EditCarPageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./pages/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'mapita',
    loadChildren: () => import('./pages/mapita/mapita.module').then( m => m.MapitaPageModule)
  },
  {
    path: 'ver-viaje',
    loadChildren: () => import('./pages/ver-viaje/ver-viaje.module').then( m => m.VerViajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
