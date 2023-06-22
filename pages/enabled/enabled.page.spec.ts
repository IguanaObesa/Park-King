import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { EnabledPage } from './enabled.page';

describe('EnabledPage', () => {
  let component: EnabledPage;
  let fixture: ComponentFixture<EnabledPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnabledPage ],
      imports: [IonicModule.forRoot()],
      providers: [Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(EnabledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
