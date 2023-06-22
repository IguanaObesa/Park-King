import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AppbdService } from '../../services/appbd.service';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {

  item: any = {
    pic: "assets/vidal.png",
    pic2: "assets/car1.jpg"
  }
  p: string;

  arregloAuto: any =[
    {
      patente: '',
      modelo: '',
      anio: '',
      //user_id: '',
      //marca: '',
    }
  ]
  constructor(private servicioBD: AppbdService,public toastController: ToastController, private router: Router, private activedRouter: ActivatedRoute,private alertController: AlertController) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.p = this.router.getCurrentNavigation().extras.state.precio;
      }
    });
  }
  async ngOnInit() {
    //this.servicioBD.dbState().subscribe(res => {
      //if (res) {
        //this.servicioBD.fetchAuto().subscribe(res => {
          //this.arregloAuto = res;
        //})
      //}
    //})
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Asiento reservado!',
      duration: 2000
    });
    toast.present();
  }
  alerta() {
    this.presentToast();
  }
}