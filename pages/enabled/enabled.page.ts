import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AppbdService } from '../../services/appbd.service';

@Component({
  selector: 'app-admin',
  templateUrl: './enabled.page.html',
  styleUrls: ['./enabled.page.scss'],
})
export class EnabledPage implements OnInit {

  users: any = [
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

  constructor(private servicioBD: AppbdService, public toastController: ToastController, private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) { }

  editar(u) {
    this.servicioBD.modificarEstado(u);
    this.servicioBD.presentToast("Usuario Deshabilitado");
    this.router.navigate(['/unabled']);
  }

  ngOnInit() {
    this.servicioBD.fetchUsuario2().subscribe((usuario) => {
      this.users = usuario;
    })
  }
}