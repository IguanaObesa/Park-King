import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { ViajeComponent } from './viaje.component';

describe('ViajeComponent', () => {
  let component: ViajeComponent;
  let fixture: ComponentFixture<ViajeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeComponent ],
      imports: [IonicModule.forRoot()],
      providers: [Camera, SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(ViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
