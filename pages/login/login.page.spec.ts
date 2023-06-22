import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let service: NativeStorage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()],
      providers: [Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});