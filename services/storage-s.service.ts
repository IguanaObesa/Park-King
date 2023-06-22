import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})
export class StorageSService {

  constructor(private storage: Storage) {
    this.createUser();
  }

  async createUser() {
    await this.storage.defineDriver(cordovaSQLiteDriver);
    await this.storage.create();
  }
  async clearUser(){
    await this.storage.clear();
  }
  async getUser(){
    const data = await this.storage.get('usuario');
    return data;
  }
  async setUser(user){
    await this.storage.set('usuario', user);
  }
}
