import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppbdService } from '../../services/appbd.service';
import { CameraService } from 'src/app/services/camera.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.page.html',
  styleUrls: ['./edit-perfil.page.scss'],
})

export class EditPerfilPage implements OnInit {

  user: any = {};
  //------------------------
  correo: string;
  nombre: string;
  apellido: string;
  //------------------------
  pic: any;
  //------------------------
  picture: any;
  picture2: any;
  picture3: boolean = true;
  //------------------------
  constructor(private camara: CameraService, private storage: NativeStorage, private router: Router, private alertController: AlertController, private servicioBD: AppbdService) {
    this.storage.getItem('usuario').then(a => {
      this.user = a;
      this.pic = a.foto;
      this.correo = a.correo;
      this.nombre = a.nombre;
      this.apellido = a.apellido;
    })
  }

  validar() {
    let ver = true;
    if (this.nombre == "" || this.apellido == "" || this.correo == "") {
      this.servicioBD.presentAlert("Debe rellenar todos los campos")
      ver = false;
    } else {
      ver = this.verMail();

      if (/[" "]/.test(this.nombre) || /[" "]/.test(this.apellido)) {
        ver = false;
      }
    }
    if (ver) {
      if (this.picture == this.picture2) {
        this.user.foto = this.pic;
      }
      else {
        this.user.foto = this.picture;
      }
      this.user.nombre = this.nombre;
      this.user.correo = this.correo;
      this.user.apellido = this.apellido;
      this.storage.setItem('usuario', this.user).then(b => {
        this.servicioBD.editUsuario(this.user.id_usuario, this.nombre, this.apellido, this.correo, this.user.foto, this.user);
        this.storage.setItem('usuario', this.user)
        this.router.navigate(['home/perfil']);
      });
    }
  }

  camera() {
    this.camara.tomarFoto();
  }

  verMail() {
    var verf = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9-]/;
    if (this.correo.match(verf)) {
      return true;
    } else {
      return false;
    }
  }

  async ngOnInit() {
    this.servicioBD.fetchUsuario().subscribe(item => {
      this.user = item;
    })
    this.camara.fetchFoto().subscribe(item => {
      this.pic = item;
      this.picture = this.picture2;
      this.picture3 = true;
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Usuario invalido',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }
}