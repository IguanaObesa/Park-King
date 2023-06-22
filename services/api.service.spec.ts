import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('--------Crear Servicio---------', () =>{
    expect(service).toBeTruthy();
  })
  it('------------Api Funciona-------------------', () =>{
    service.getApi().subscribe(user => {
      expect(user).toHaveSize(3);
    })
  })
  it('--------------Rol de usuarios 2-----------------', () =>{
    service.getApi1(2).subscribe(user =>{
      expect(user.id).toHaveSize(2);
    })
  })
  it('--------------id de usuario 2-----------------', () =>{
    service.getApi2(2).subscribe(user =>{
      expect(user.id).toBe(2);
    })
  })
});
