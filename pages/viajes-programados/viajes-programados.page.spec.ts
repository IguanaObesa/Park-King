import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { viajesProgramadosPage } from './viajes-programados.page';

describe('ViajesProgramadosPage', () => {
  let component: viajesProgramadosPage;
  let fixture: ComponentFixture<viajesProgramadosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ viajesProgramadosPage ],
      imports: [IonicModule.forRoot()],
      providers: [Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(viajesProgramadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
