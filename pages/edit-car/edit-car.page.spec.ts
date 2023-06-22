import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { EditCarPage } from './edit-car.page';

describe('EditCarPage', () => {
  let component: EditCarPage;
  let fixture: ComponentFixture<EditCarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCarPage ],
      imports: [IonicModule.forRoot()],
      providers: [Camera]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
