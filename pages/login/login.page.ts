import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppbdService } from '../../services/appbd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ApiService } from 'src/app/services/api.service';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  item: any = {
    pic: "assets/logo.png"
  }

  user: string = "";
  pass: string = "";

  user1: any;
  user2: any;
  car: any = {};

  constructor(private api: ApiService, private servicioBD: AppbdService, public toastController: ToastController, private storage: NativeStorage, private storage1: Storage, private router: Router) { }

  validar() {
    this.storage.clear();
    this.user1 = this.user2;
    this.servicioBD.validarLogin(this.user, this.pass).then(res => {
      this.servicioBD.loginReady.subscribe(res2 => {
        if (res2) {
          this.servicioBD.fetchUsuario().subscribe(user => {
            this.user1 = user;
            this.storage.setItem('usuario', this.user1);
            if (this.user1.nombre == null || this.user1.apellido == null || this.user1.correo == null ){
              this.storage.setItem('usuario', this.user1)
              this.router.navigate(['edit-perfil']);
            } else {
              this.storage.setItem('usuario', this.user1);
              this.router.navigate(['home/perfil']);
            }
          })
        }
      })
    });
  }

  async ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      this.api.getApi().subscribe(users => {
        this.servicioBD.userApiReg(users);
      })
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Inicio de sesión exitoso',
      duration: 500
    });
    toast.present();
  }
}