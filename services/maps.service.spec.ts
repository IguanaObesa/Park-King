import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { IonicModule } from '@ionic/angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { MapsService } from './maps.service';

describe('MapsService', () => {
  let service: MapsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [ Camera , SQLite]
    }).compileComponents();

    service = TestBed.inject(MapsService);
  }));

  /*it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
