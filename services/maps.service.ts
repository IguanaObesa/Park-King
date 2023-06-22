import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppbdService } from './appbd.service';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  newRoute = new BehaviorSubject([]);
  createdRoute: any = [
    {
      inicio: '',
      destino: '',
    }
  ]

  newRouteSee = new BehaviorSubject([]);
  route: any = [
    {
      inicio: '',
      destino: '',
    }
  ]

  constructor(private servicioBD: AppbdService) { }


  addRoute(inicio: any, destino: any) {
    this.createdRoute.inicio = inicio;
    this.createdRoute.destino = destino;
    this.newRoute.next(this.createdRoute)
  }
  
  fetchRoute(): Observable<any> {
    return this.newRoute.asObservable();
  }

  verRoute(inicio: any, destino: any) {
    this.route.inicio = inicio;
    this.route.destino = destino;
    this.newRouteSee.next(this.route)
  }

  fetchRoute2(): Observable<any> {
    return this.newRouteSee.asObservable();
  }
}