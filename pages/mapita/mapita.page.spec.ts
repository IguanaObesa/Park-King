import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { MapitaPage } from './mapita.page';

describe('MapitaPage', () => {
  let component: MapitaPage;
  let fixture: ComponentFixture<MapitaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapitaPage ],
      imports: [IonicModule.forRoot()],
      providers: [Geolocation]
    }).compileComponents();

    fixture = TestBed.createComponent(MapitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
