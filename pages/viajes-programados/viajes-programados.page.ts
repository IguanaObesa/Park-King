import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppbdService } from '../../services/appbd.service';
import { Location } from '@angular/common';
import { MapsService } from 'src/app/services/maps.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-info',
  templateUrl: './viajes-programados.page.html',
  styleUrls: ['./viajes-programados.page.scss'],
})
export class viajesProgramadosPage implements OnInit {

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
  idUsuario: any;
  //------------------------------------
  conductor: string = "";
  imagenConductor: any;
  pasajeros: any;
  pasajeros2: any;
  //----------------------------------
  hora: string = "12:00"
  //----------------------------------
  destino: string = "Mapocho 0420";
  //---------------------------------
  costo: any;

  constructor(private location: Location, private map: MapsService, private storage: NativeStorage, private servicioBD: AppbdService, private router: Router, private activedRouter: ActivatedRoute) {
    this.storage.getItem('usuario').then(u => {
      this.idUsuario = u.id_usuario;
    })
  }

  back(): void {
    this.location.back()
  }

  cancel(id_viaje, rol_usuario) {
    if (rol_usuario == 1) {
      this.servicioBD.cancel1(id_viaje, this.idUsuario);
      this.router.navigate(['home/perfil']);
    } else {
      this.servicioBD.cancel2(id_viaje, this.idUsuario);
      this.router.navigate(['home/perfil']);
    }
  }

  verRuta(inicio, destino) {
    this.map.verRoute(inicio, destino);
    this.router.navigate(['/ver-viaje']);
  }

  ngOnInit() {
    this.servicioBD.fetchViaje2().subscribe(item => {
      this.pasajeros = item;
    })
    this.servicioBD.fetchUsuario().subscribe(item => {
      this.user = item;
      this.idUsuario = this.user.id_usuario;
    })
  }
}