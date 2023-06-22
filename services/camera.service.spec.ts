import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { IonicModule } from '@ionic/angular';

import { CameraService } from './camera.service';

describe('CameraService', () => {
  let service: CameraService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [ Camera ]
    }).compileComponents();

    service = TestBed.inject(CameraService);
  }));
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});