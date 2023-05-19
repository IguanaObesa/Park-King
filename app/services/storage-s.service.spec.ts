import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';

import { StorageSService } from './storage-s.service';

describe('StorageSService', () => {
  let service: StorageSService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Storage]
    });
    service = TestBed.inject(StorageSService);
  });

  afterEach(async () => {
    await service.createUser();
    await service.clearUser();
  });

  it ('---should be created--', () => {
    expect(service).toBeTruthy();
  });

  it ('----return user id----', async () => {
    await service.createUser();
    let usuario={
      id_usuario: 1,
      usuario: 'GigaChad',
      nombre: 'rayo',
      apellido: 'makuin',
      correo: 'makuin@hotmail.com',
      clave: '12345'
    }
    await service.setUser(usuario);
    const value = await service.getUser();
    expect(value.id_usuario).toEqual(1);
  })
  it ('------storage vacio-------', async () => {
    await service.createUser();
    const value = await service.getUser();
    expect(value).toEqual(null);
  })
  it ('----return user nombre----', async () => {
    await service.createUser();
    let usuario={
      id_usuario: 1,
      usuario: 'GigaChad',
      nombre: 'rayo',
      apellido: 'makuin',
      correo: 'makuin@hotmail.com',
      clave: '12345'
    }
    await service.setUser(usuario);
    const value = await service.getUser();
    expect(value.nombre).toEqual("rayo");
  })
});
