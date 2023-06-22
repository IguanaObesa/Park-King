import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { CrearViajePage } from './crear-viaje.page';

describe('CrearViajePage', () => {
  let component: CrearViajePage;
  let fixture: ComponentFixture<CrearViajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearViajePage ],
      imports: [IonicModule.forRoot()],
      providers: [ NativeStorage, Camera, SQLite ]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
