import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

import { InfoViajePage } from './info-viaje.page';

describe('InfoViajePage', () => {
  let component: InfoViajePage;
  let fixture: ComponentFixture<InfoViajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoViajePage ],
      imports: [IonicModule.forRoot()],
      providers: [ Camera, SQLite, NativeStorage ]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
