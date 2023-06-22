import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AppbdService } from '../../services/appbd.service';

@Component({
  selector: 'app-unabled',
  templateUrl: './unabled.page.html',
  styleUrls: ['./unabled.page.scss'],
})
export class UnabledPage implements OnInit {

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
    this.servicioBD.modificarEstado2(u);
    this.servicioBD.presentToast("Usuario Habilitado");
    this.router.navigate(['/enabled']);
  }
  ngOnInit() {
    this.servicioBD.fetchUsuario3().subscribe((usuario) => {
      this.users = usuario;
    })
  }
}