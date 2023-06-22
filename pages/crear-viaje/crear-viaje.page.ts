import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppbdService } from 'src/app/services/appbd.service';
import { MapsService } from 'src/app/services/maps.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})

export class CrearViajePage implements OnInit {

  user: any = [
    {
      id_usuario: '',
      usuario: '',
      nombre: '',
      apellido: '',
      clave: '',
      correo: '',
      estado: '',
      rol: '',
      foto: '',
    }
  ];
  //------------------
  hora: number = null;
  sede: any;
  autos: string = "";
  asientos: number = null;
  costo: number = null;
  //---------------------
  listaSedes: any;
  //--------------------
  inicio: any;
  destino: any;

  constructor(private storage: NativeStorage, private map: MapsService, private servicioBD: AppbdService, private router: Router, private alertController: AlertController,) { }

  validar() {
    let ver = true;
    if (!this.sede || !this.asientos) {
      ver = false;
    } if (ver) {
      this.servicioBD.crearViaje(this.hora, this.asientos, this.costo, this.inicio, this.destino, this.user.id_usuario, this.sede)
      this.router.navigate(['/home/mapa'])
    }
  }

  ngOnInit() {
    this.servicioBD.fetchUsuario().subscribe(item => {
      this.user = item;
    })
    this.servicioBD.fetchSede().subscribe(item => {
      this.listaSedes = item;
    })
    this.map.fetchRoute().subscribe((ruta) => {
      this.inicio = ruta.inicio;
      this.destino = ruta.destino
    })
  }
}