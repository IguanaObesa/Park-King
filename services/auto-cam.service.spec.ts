import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { IonicModule } from '@ionic/angular';

import { AutoCamService } from './auto-cam.service';

describe('AutoCamService', () => {
  let service: AutoCamService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [ Camera ]
    }).compileComponents();

    service = TestBed.inject(AutoCamService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
