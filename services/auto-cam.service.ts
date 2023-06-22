import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoCamService {

  picAuto = new BehaviorSubject([]);
  picAuto2: any;
  picAuto3: any;
  constructor(private camera: Camera) { }

  foto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.picAuto3 = 'data:image/jpeg;base64,' + imageData;
      this.picAuto.next(this.picAuto3);
    }, (err) => {
    });

  }

  fetchFoto(): Observable<any> {
    return this.picAuto.asObservable();
  }

  setCar() {
    this.picAuto.next(this.picAuto2);
  }
}