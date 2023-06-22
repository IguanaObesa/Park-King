import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { AddVehiculoPage } from './add-vehiculo.page';

describe('AddVehiculoPage', () => {
  let component: AddVehiculoPage;
  let fixture: ComponentFixture<AddVehiculoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehiculoPage ],
      imports: [IonicModule.forRoot()],
      providers: [ Camera, SQLite ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
