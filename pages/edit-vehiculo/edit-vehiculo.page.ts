import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppbdService } from '../../services/appbd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.page.html',
  styleUrls: ['./edit-vehiculo.page.scss'],
})

export class EditVehiculoPage implements OnInit {

  user: any = {};
  autos: any;

  constructor(private storage: NativeStorage, private servicioBD: AppbdService, private router: Router) {}

  borrarAuto(auto) {
    this.servicioBD.borrarAuto(auto.patente, this.user.id_usuario);
  }

  editAuto(auto) {
    this.storage.setItem('auto', auto);
    this.router.navigate(['/edit-car'])
  }

  ngOnInit() {
    this.servicioBD.fetchAuto().subscribe((item) => {
      this.autos = item;
    })
    this.servicioBD.fetchUsuario().subscribe(item => {
      this.user = item;
    })
  }
}