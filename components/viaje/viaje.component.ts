import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppbdService } from 'src/app/services/appbd.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss'],
})
export class ViajeComponent implements OnInit {

  sede: any;
  listaSedes: any;

  constructor(private servicioBD: AppbdService, private router: Router, private alertController: AlertController) { }

  buscarViaje() {
    this.servicioBD.buscarViaje(this.sede);
    this.router.navigate(['/info-viaje'])
  }

  ngOnInit() {
    this.servicioBD.fetchSede().subscribe(item => {
      this.listaSedes = item;
    })
  }
}