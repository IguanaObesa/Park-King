import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { AppbdService } from 'src/app/services/appbd.service';
import { AutoCamService } from 'src/app/services/auto-cam.service';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.page.html',
  styleUrls: ['./edit-car.page.scss'],
})
export class EditCarPage implements OnInit {

  auto: any;
 //--------------------------
  patente: string = "";
  marca: string = "";
  modelo: string = "";
  imagenAuto: any;
 //-------------------------
  imagen: any;
  imagen2: any;
  noImagen: boolean = true;
 //-------------------------
  constructor(private cameraCar: AutoCamService, private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController, private storage: NativeStorage, private servicioBD: AppbdService) {
    this.storage.getItem('auto').then(a => {
      this.auto = a;
      this.patente = a.patente;
      this.marca = a.marca;
      this.modelo = a.modelo;
      this.imagenAuto = a.foto;
    })
  }

  validar() {
    let ver = true;
    if (!this.marca || !this.modelo || !this.patente) {
      ver = false;
    }
    if (ver) {
      if (this.imagen == this.imagen2) {
        this.auto.foto = this.imagenAuto;
      }
      else {
        this.auto.foto = this.imagen;
      }
      this.servicioBD.modificarAuto(this.patente, this.marca, this.modelo, this.auto.foto, this.auto.id_usuario)
      this.cameraCar.setCar();
      this.router.navigate(['/edit-vehiculo'])
    }
  }

  camera() {
    this.cameraCar.foto();
  }

  ngOnInit() {
    this.cameraCar.fetchFoto().subscribe(ans => {
      this.imagenAuto = ans;
      this.imagen = this.imagen2;
      this.noImagen = true;
    })
  }
}