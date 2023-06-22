import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { alertController } from '@ionic/core';
import { MapsService } from 'src/app/services/maps.service';
import { Router } from '@angular/router';
import { AppbdService } from 'src/app/services/appbd.service';
import { Location } from '@angular/common'
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts"/>

@Component({
  selector: 'app-mapita',
  templateUrl: './mapita.page.html',
  styleUrls: ['./mapita.page.scss'],
})
export class MapitaPage implements OnInit {

  inicio: any
  destino2: any
  destino:  any;

  @ViewChild('divMapa') divMapa!: ElementRef;
  @ViewChild('dirDestino') dirDestino!: ElementRef;

  mapa!: google.maps.Map;
  markers: google.maps.Marker[];
  marker: any;
  directionRenderer: any;

  constructor(private location: Location, private GeoLocation: Geolocation, private map: MapsService, private storage: NativeStorage, private router: Router, private servicioBD: AppbdService) {
  }

  ngAfterViewInit(): void {
    this.GeoLocation.getCurrentPosition().then((resp) => {
      this.cargarMapa(resp)
    }).catch(async (error) => {
      const alert = await alertController.create({
        message: 'Active la ubicacion',
      });
      await alert.present();
    });
  };

  async calcularRuta() {
    await this.GeoLocation.getCurrentPosition().then((geo) => {
      this.inicio = new google.maps.LatLng(geo.coords.latitude, geo.coords.longitude);
    })
    const directionService = new google.maps.DirectionsService();
    if (this.directionRenderer) {
    } else {
      this.directionRenderer = new google.maps.DirectionsRenderer();
    }
    let destino = this.destino;
    this.destino2 = destino;
    await this.directionRenderer.setMap(this.mapa);
    directionService.route({
      //tambien sirve un input
      origin: this.inicio,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING,
    }, resultado => {
      this.directionRenderer.setDirections(resultado)
    })
  }

  cargarMapa(position: any): any {
    const configMapa = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
    }
    this.mapa = new google.maps.Map((this.divMapa.nativeElement), configMapa)
  }

  back(): void { this.location.back() }

  guardarRuta() {
    this.map.addRoute(this.inicio, this.destino2);
    this.servicioBD.presentAlert('Ruta Creada!!!')
    this.back()
  }

  ngOnInit() {
  }
}