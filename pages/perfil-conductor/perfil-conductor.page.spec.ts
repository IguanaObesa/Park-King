import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { PerfilConductorPage } from './perfil-conductor.page';

describe('PerfilConductorPage', () => {
  let component: PerfilConductorPage;
  let fixture: ComponentFixture<PerfilConductorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilConductorPage ],
      imports: [IonicModule.forRoot()],
      providers: [Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
