import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { EditVehiculoPage } from './edit-vehiculo.page';

describe('EditVehiculoPage', () => {
  let component: EditVehiculoPage;
  let fixture: ComponentFixture<EditVehiculoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehiculoPage ],
      imports: [IonicModule.forRoot()],
      providers: [NativeStorage, Camera, SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(EditVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
