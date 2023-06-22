import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { VerViajePage } from './ver-viaje.page';
import { MapsService } from 'src/app/services/maps.service';
import { AppbdService } from 'src/app/services/appbd.service';
import { Location } from '@angular/common';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
 
describe('VerViajePage', () => {
  let component: VerViajePage;
  let fixture: ComponentFixture<VerViajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerViajePage ],
      imports: [IonicModule.forRoot()],
      providers: [Geolocation, MapsService, SQLite,AppbdService, Location, Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(VerViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
