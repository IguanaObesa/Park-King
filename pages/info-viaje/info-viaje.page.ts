import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AppbdService } from '../../services/appbd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './info-viaje.page.html',
  styleUrls: ['./info-viaje.page.scss'],
})
export class InfoViajePage implements OnInit {

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
  //---------------------
  listaViajes: any;
  sede: string = "";
  viaje: any;
  //---------------------
  inicio: any;
  destino: any;
  //---------------------
  ruta: any = [
    {
      inicio: "",
      destino: "",
    }
  ]

  constructor(private map: MapsService, private storage: NativeStorage, private servicioBD: AppbdService, public toastController: ToastController, private router: Router, private alertController: AlertController) { }

  reservar(id_viaje) {
    this.servicioBD.reservarViaje(id_viaje, this.user.id_usuario)
    this.router.navigate(['home/viaje']);
  }

  ver(inicio, destino) {
    this.map.verRoute(inicio, destino);
    this.router.navigate(['/ver-viaje']);
  }
  
  ngOnInit() {
    this.servicioBD.fetchUsuario().subscribe(item => {
      this.user = item;
    })
    this.servicioBD.fetchViaje().subscribe(item => {
      this.listaViajes = item;
    })
  }
}