import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { EditPerfilPage } from './edit-perfil.page';

describe('EditPerfilPage', () => {
  let component: EditPerfilPage;
  let fixture: ComponentFixture<EditPerfilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPerfilPage ],
      imports: [IonicModule.forRoot()],
      providers: [Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
