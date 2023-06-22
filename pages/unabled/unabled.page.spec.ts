import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { UnabledPage } from './unabled.page';

describe('UnabledPage', () => {
  let component: UnabledPage;
  let fixture: ComponentFixture<UnabledPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnabledPage ],
      imports: [IonicModule.forRoot()],
      providers: [Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(UnabledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
