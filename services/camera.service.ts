import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Injectable({
  providedIn: 'root'
})

export class CameraService {

  pic = new BehaviorSubject([]);
  pic2: any;
  pic3: any;
  constructor(private camera: Camera) { }

  tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.pic3 = 'data:image/jpeg;base64,' + imageData;
      this.pic.next(this.pic3);
    }, (err) => {
    });
  }

  fetchFoto(): Observable<any> {
    return this.pic.asObservable();
  }

  setPic() {
    this.pic.next(this.pic2);
  }
}
