import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


import { IonicStorageModule } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule ,IonicModule.forRoot({
    rippleEffect: false,
    mode: 'md'
  }), AppRoutingModule,
  IonicStorageModule.forRoot({
    driverOrder: [cordovaSQLiteDriver._driver, Drivers.IndexedDB]
  }),HttpClientModule],
  providers: [NativeStorage,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite, Camera, Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}