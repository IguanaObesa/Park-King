import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppbdService } from 'src/app/services/appbd.service';
import { AutoCamService } from 'src/app/services/auto-cam.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.page.html',
  styleUrls: ['./add-vehiculo.page.scss'],
})
export class AddVehiculoPage implements OnInit {

  user: any;
  auto: any;

  patente: string = "";
  marca: string = "";
  modelo: string = "";
  imagenAuto: any;

  imagen: any;
  imagen2: any;
  noImagen: boolean = true;

  foto: any;

  constructor(private router: Router, private alertController: AlertController, private servicioBD: AppbdService, private autoCam: AutoCamService, private storage: NativeStorage) {
    this.storage.getItem('usuario').then(a => {
      this.user = a;
      this.imagenAuto = this.imagen2;
    })
  }

  validar() {
    let ver = true;
    if (!this.marca || !this.modelo || !this.patente) {
      this.alerta();
      ver = false;
    }
    if (ver) {
      if (this.imagen == this.imagen2) {
        this.foto = this.imagenAuto;
      }
      else {
        this.foto = this.imagen;
      }
      this.servicioBD.agregarAuto(this.patente, this.marca, this.modelo, this.foto, this.user.id_usuario);
      this.autoCam.setCar();
      this.router.navigate(['/home/perfil'])
    }
  }

  camera(){
    this.autoCam.foto();
  }

  ngOnInit() {
    this.autoCam.fetchFoto().subscribe(res => {
      this.imagenAuto = res;
      this.imagen = this.imagen2;
      this.noImagen = true;
    })
    this.servicioBD.fetchUsuario().subscribe(item =>{
      this.user = item;
    })
  }

  async alerta() {
    const alert = await this.alertController.create({
      message: 'No debe dejar campos vacíos',
    });
    await alert.present();
  }
}
