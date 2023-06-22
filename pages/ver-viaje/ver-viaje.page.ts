import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppbdService } from 'src/app/services/appbd.service';
import { MapsService } from 'src/app/services/maps.service';
import { Location } from '@angular/common';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-ver-viaje',
  templateUrl: './ver-viaje.page.html',
  styleUrls: ['./ver-viaje.page.scss'],
})
export class VerViajePage implements OnInit {
  destino: any
  inicio: any
  ruta: any
  //---------------------------------------
  @ViewChild('divMapa') divMapa!: ElementRef;
  mapa!: google.maps.Map;
  directionRenderer: any;

  constructor(private location: Location, private GeoLocation: Geolocation, private servicioBD: AppbdService, private map: MapsService) {
    let that = this
    setTimeout(function () {
      that.a();
    }, 5000);
  }

  back(): void {
    this.location.back()
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.GeoLocation.getCurrentPosition().then((resp) => {
      this.cargarMapa(resp)
    }).catch(async (error) => {
      this.servicioBD.presentAlert('Active la ubicacion de su dispositivo para poder ver el mapa');
    });
  };

  a() {
    this.map.fetchRoute2().subscribe((ruta) => {
      this.RutaGuardada(ruta.inicio, ruta.destino);
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

  async RutaGuardada(ini, dest) {
    await this.GeoLocation.getCurrentPosition().then((geo) => {
      this.inicio = new google.maps.LatLng(geo.coords.latitude, geo.coords.longitude);
    })
    const directionService = new google.maps.DirectionsService();
    this.directionRenderer = new google.maps.DirectionsRenderer();
    await this.directionRenderer.setMap(this.mapa);
    directionService.route({
      origin: this.inicio,
      destination: dest,
      travelMode: google.maps.TravelMode.DRIVING,
    }, result => {
      this.directionRenderer.setDirections(result)
    })
  }
}