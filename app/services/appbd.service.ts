import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

import { Usuario } from './usuario';
import { Viaje } from './viaje';
import { Auto } from './auto';
import { DetalleViaje } from './detalle-viaje';
import { AutoCamService } from './auto-cam.service';
import { CameraService } from './camera.service';
import { Sede } from './sede';

@Injectable({
  providedIn: 'root'
})

export class AppbdService {

  public database: SQLiteObject;
  //*************************************************************************CREATE*************************************************************************//

  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement ,usuario VARCHAR(30), nombre VARCHAR(50) ,apellido VARCHAR(25), correo VARCHAR(30), clave VARCHAR(25) NOT NULL, estado VARCHAR(5), rol INTEGER, foto BLOB);";
  auto: string = "CREATE TABLE IF NOT EXISTS auto(patente VARCHAR(10) PRIMARY KEY, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, foto BLOB, id_usuario INTEGER NOT NULL, FOREIGN KEY (id_usuario) REFERENCES usuario);";
  sede: string = "CREATE TABLE IF NOT EXISTS sede(id_sede INTEGER PRIMARY KEY autoincrement, sede VARCHAR(30) NOT NULL);";
  viaje: string = "CREATE TABLE IF NOT EXISTS viaje(id_viaje INTEGER PRIMARY KEY autoincrement, fechahora TEXT NOT NULL, asientos_disp INTEGER NOT NULL, pasajeros INTEGER NOT NULL, costo INTEGER NOT NULL, status VARCHAR(30) NOT NULL, inicio BLOB, destino BLOB, id_usuario INTEGER NOT NULL, id_sede INTEGER NOT NULL, patente VARCHAR(10) NOT NULL, FOREIGN KEY(id_usuario)REFERENCES usuario, FOREIGN KEY(patente)REFERENCES auto, FOREIGN KEY(id_sede)REFERENCES sede);";
  detalleViaje: string = "CREATE TABLE IF NOT EXISTS detalle_viaje(id_detalle INTEGER PRIMARY KEY autoincrement, id_viaje INTEGER NOT NULL, id_usuario INTEGER NOT NULL , rol_usuario INTEGER NOT NULL, FOREIGN KEY(id_viaje)REFERENCES viaje, FOREIGN KEY(id_usuario)REFERENCES usuario);";
 
  //*************************************************************************INSERT*************************************************************************//

  registroAuto: string = "INSERT or IGNORE INTO auto(patente,marca,modelo,foto,id_usuario) VALUES ('lgmc95','Corvette','Chevrolet','/assets/mcqueen.jpg',1);";

  registroSede1: string = "INSERT or IGNORE INTO sede(id_sede,sede) VALUES (1,'Plaza Norte');";
  registroSede2: string = "INSERT or IGNORE INTO sede(id_sede,sede) VALUES (2,'Alameda');";
  registroSede3: string = "INSERT or IGNORE INTO sede(id_sede,sede) VALUES (3,'Maipu');";

  //****************************************************************************LISTAS********************************************************************//

  user = new BehaviorSubject([]);
  loginReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  user1: any;

  listaUsuario = new BehaviorSubject([]);
  listaViaje = new BehaviorSubject([]);
  listaAuto = new BehaviorSubject([]);
  listaSede = new BehaviorSubject([]);
  viaje1 = new BehaviorSubject([]);

  listaUsuario1 = new BehaviorSubject([]);
  listaUsuario2 = new BehaviorSubject([]);
  listaUsuario3 = new BehaviorSubject([]);

  //***************************************************************************************************/

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private autoCam: AutoCamService, private camera: CameraService, private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.crearBD();
  }

  dbState() {
    return this.isDBReady.asObservable();
  }
  //***********************************************************************************************************************************************/
  fetchUsuario(): Observable<Usuario[]> {
    return this.user.asObservable();
  }
  fetchViaje(): Observable<Viaje[]> {
    return this.listaViaje.asObservable();
  }
  fetchViaje2(): Observable<DetalleViaje[]> {
    return this.viaje1.asObservable();
  }
  fetchAuto(): Observable<Auto[]> {
    return this.listaAuto.asObservable();
  }
  fetchSede(): Observable<Sede[]> {
    return this.listaSede.asObservable();
  }
  ////////////////////////////////////////////////////
  fetchUsuario1(): Observable<Usuario[]> {
    return this.listaUsuario1.asObservable();
  }
  fetchUsuario2(): Observable<Usuario[]> {
    return this.listaUsuario2.asObservable();
  }
  fetchUsuario3(): Observable<Usuario[]> {
    return this.listaUsuario3.asObservable();
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      icon: 'globe'
    });
    await toast.present();
  }

  //***********************************************************************************************************************************************/
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'parking2.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      }).catch(e => {
        this.presentToast("Error BD:" + e);
      })
    })
  }
  //***********************************************************************************************************************************************/
  async crearTablas() {
    try {
      await this.database.executeSql(this.usuario, []);

      await this.database.executeSql(this.auto, []);

      await this.database.executeSql(this.sede, []);

      await this.database.executeSql(this.viaje, []);

      await this.database.executeSql(this.detalleViaje, []);

      await this.database.executeSql(this.registroAuto, []);

      await this.database.executeSql(this.registroSede1, []);
      await this.database.executeSql(this.registroSede2, []);
      await this.database.executeSql(this.registroSede3, []);

      await this.buscarSede();
      await this.buscarUsuario2();
      await this.buscarUsuario3();

      this.isDBReady.next(true);
      //this.presentToast("***NICE***");
    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }
  }
  //*********************************************************************INICIO**************************************************************************/

  async validarLogin(userL, passL) {
    this.loginReady.next(false);
    let usuario: Usuario[];
    this.user.next(usuario);
    try {
      let state = '1'
      let data = [userL, passL, state];
      await this.database.executeSql('SELECT * FROM usuario WHERE usuario = ? AND clave = ? AND estado = ?', data).then(res => {
        let items: Usuario[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_usuario: res.rows.item(i).id_usuario,
              usuario: res.rows.item(i).usuario,
              nombre: res.rows.item(i).nombre,
              apellido: res.rows.item(i).apellido,
              clave: res.rows.item(i).clave,
              correo: res.rows.item(i).correo,
              estado: res.rows.item(i).estado,
              rol: res.rows.item(i).rol,
              foto: res.rows.item(i).foto,
            })
          }
          this.user1 = items[0];
          this.user.next(this.user1);
          this.buscarAutos(this.user1.id_usuario);
          this.buscarViaje1(this.user1.id_usuario)
          this.camera.setPic();
          this.autoCam.setCar();
          this.loginReady.next(true);
        }
        else {
          this.presentAlert("Ingrese un correo/usuario y contraseña válidos")
        }
      })
    } catch (e) {
      this.presentAlert("Ingrese un usuario y contraseña válidos.")
    }
  }

  async agregarAuto(patente, marca, modelo, foto, id_usuario) {
    let data = [patente, marca, modelo, foto, id_usuario];
    let data2 = [patente];
    await this.database.executeSql('SELECT * FROM auto WHERE patente = ?', data2).then(ans2 => {
      if (ans2.rows.length > 0) {
        this.presentAlert("Patente ya registrada")
      } else {
        return this.database.executeSql('INSERT INTO auto (patente,marca,modelo,foto,id_usuario) VALUES (?,?,?,?,?)', data).then(i => {
          this.buscarAutos(id_usuario);
          this.presentToast1();
        })
      }
    })
  }

  buscarAutos(id) {
    let data = [id];
    return this.database.executeSql('SELECT * FROM auto WHERE id_usuario = ?', data).then(res => {
      let items: Auto[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            patente: res.rows.item(i).patente,
            marca: res.rows.item(i).marca,
            modelo: res.rows.item(i).modelo,
            foto: res.rows.item(i).foto,
            id_usuario: res.rows.item(i).id_usuario,
          })
        }
      }
      this.listaAuto.next(items);
    })
  }

  editUsuario(id, nombre, apellido, correo, foto, usuario) {
    let data = [correo, nombre, apellido, foto, id]
    return this.database.executeSql('UPDATE usuario SET correo = ? , nombre = ?, apellido = ? , foto = ? WHERE id_usuario = ?', data).then(a => {
      this.user.next(usuario);
      this.presentToast("Edicion Completada!!!")
    })
  }

  modificarAuto(patente, marca, modelo, foto, id_usuario) {
    let data = [marca, modelo, foto, patente];
    return this.database.executeSql('UPDATE auto SET marca = ?, modelo = ?, foto = ? WHERE patente = ?', data).then(data2 => {
      this.buscarAutos(id_usuario);
    })
  }

  borrarAuto(patente, id_usuario) {
    return this.database.executeSql('DELETE FROM auto WHERE patente = ?', [patente]).then(a => {
      this.buscarAutos(id_usuario)
    })
  }
  /***************************************************************************VIAJES********************************************************************************/

  buscarViaje(id_sede) {
    let data = [id_sede];
    return this.database.executeSql('SELECT V.id_viaje as viaje,date(fechahora) as fecha,time(fechahora) as hora,asientos_disp,pasajeros,costo,inicio,destino,status,rol_usuario,U.id_usuario,patente,id_sede,U.foto as foto,nombre,apellido,correo FROM viaje V JOIN detalle_viaje D ON V.id_viaje = D.id_viaje JOIN usuario U on D.id_usuario = U.id_usuario WHERE id_sede = ? AND rol_usuario = 1;', data).then(res => {
      let items: DetalleViaje[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_viaje: res.rows.item(i).viaje,
            fecha_viaje: res.rows.item(i).fecha,
            hora_salida: res.rows.item(i).hora,
            asientos_disp: res.rows.item(i).asientos_disp,
            pasajeros: res.rows.item(i).pasajeros,
            costo: res.rows.item(i).costo,
            status: res.rows.item(i).status,
            rol_usuario: res.rows.item(i).rol_usuario,
            //-------------------------------------------------------
            id_usuario: res.rows.item(i).id_usuario,
            //-------------------------------------------------------
            patente: res.rows.item(i).patente,
            //-------------------------------------------------------
            id_sede: res.rows.item(i).id_sede,
            //-------------------------------------------------------
            foto: res.rows.item(i).foto,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            inicio: res.rows.item(i).inicio,
            destino: res.rows.item(i).destino,
            correo: res.rows.item(i).correo,
          })
        }
      }
      this.listaViaje.next(items);
    })
  }

  buscarViaje1(id_usuario) {
    let data = [id_usuario];
    return this.database.executeSql('SELECT * FROM detalle_viaje WHERE id_usuario = ? ;', data).then(res => {
      let id_viaje = res.rows.item(0).id_viaje;
      let data2 = [id_viaje];
      return this.database.executeSql('SELECT V.id_viaje as viaje,date(fechahora) as fecha,time(fechahora) as hora,asientos_disp,pasajeros,costo,inicio,destino,status,rol_usuario,U.id_usuario,patente,id_sede,U.foto as foto,nombre,apellido,correo FROM viaje V JOIN detalle_viaje D ON V.id_viaje = D.id_viaje JOIN usuario U on D.id_usuario = U.id_usuario WHERE D.id_viaje = ?;', data2).then(res => {
        let items: DetalleViaje[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_viaje: res.rows.item(i).viaje,
              fecha_viaje: res.rows.item(i).fecha,
              hora_salida: res.rows.item(i).hora,
              asientos_disp: res.rows.item(i).asientos_disp,
              pasajeros: res.rows.item(i).pasajeros,
              costo: res.rows.item(i).tarifa,
              status: res.rows.item(i).status,
              rol_usuario: res.rows.item(i).rol_usuario,
              //---------------------------------------------//
              id_usuario: res.rows.item(i).id_usuario,
              patente: res.rows.item(i).patente,
              id_sede: res.rows.item(i).id_sede,
              //--------------------------------------------//
              foto: res.rows.item(i).foto,
              nombre: res.rows.item(i).nombre,
              apellido: res.rows.item(i).apellido,
              //--------------------------------------------//
              inicio: res.rows.item(i).inicio,
              destino: res.rows.item(i).destino,
              correo: res.rows.item(i).correo,
            })
          }
        }
        this.viaje1.next(items);
      })
    })
  }

  async crearViaje(hora, asientos_disp, costo, inicio, destino, id_usuario, patente, id_sede) {
    let userid = [id_usuario];
    await this.database.executeSql('SELECT id_usuario FROM detalle_viaje WHERE id_usuario = ? ;', userid).then(res => {
      if (res.rows.length > 0) {
        this.presentAlert("Ya tiene un viaje pendiente!!!");
      } else {
        let rol_usuario = 1;
        let pasajeros = 0;
        let status = 'En espera';
        let data = [hora, asientos_disp, pasajeros, costo, inicio, destino, status, id_usuario, patente, id_sede];
        this.database.executeSql('INSERT INTO viaje(fechahora,asientos_disp,pasajeros,costo,inicio,destino,status,id_usuario,patente,id_sede) VALUES (?,?,?,?,?,?,?,?,?,?);', data);
        this.database.executeSql('SELECT max(id_viaje) as max FROM viaje;', []).then(res2 => {
          let id_viaje = res2.rows.item(0).max;
          let data2 = [id_viaje, id_usuario, rol_usuario]
          this.database.executeSql('INSERT INTO detalle_viaje(id_viaje,id_usuario,rol_usuario) VALUES(?,?,?);', data2);
          this.presentAlert("Viaje creado!!!");
        })
      }
    })
  }

  async reservarViaje(id_viaje, id_usuario) {
    let data = [id_usuario];
    await this.database.executeSql('SELECT * FROM detalle_viaje WHERE id_usuario = ? ;', data).then(async res => {
      if (res.rows.length > 0) {
        this.presentAlert("No puede tomar 2 viajes a la vez")
      } else {
        let rol_usuario = 2;
        let data2 = [id_viaje, id_usuario,rol_usuario];
        await this.database.executeSql('INSERT INTO detalle_viaje(id_viaje,id_usuario,rol_usuario) VALUES(?,?,?);', data2);
        let data3 = [id_viaje];
        await this.database.executeSql('UPDATE viaje SET pasajeros = pasajeros+1 WHERE id_viaje = ?;', data3);
        this.presentAlert("Asiento Reservado!!!");
      }
    })
  }

  async cancel1(id_viaje, id_usuario) {
    return this.database.executeSql('DELETE FROM detalle_viaje WHERE id_viaje = ?', [id_viaje]).then(a => {
      this.database.executeSql('DELETE FROM viaje WHERE id_viaje = ?', [id_viaje]);
      this.buscarViaje1(id_usuario);
      this.presentAlert('Viaje Elimminado Exitosamente!!!')
    })
  };

  async cancel2(id_viaje, id_usuario) {
    return this.database.executeSql('DELETE FROM detalle_viaje WHERE id_usuario = ?', [id_usuario]).then(async a => {
      let data3 = [id_viaje];
      await this.database.executeSql('UPDATE viaje SET pasajeros = pasajeros-1 WHERE id_viaje = ?;', data3);
      this.buscarViaje1(id_usuario);
      this.presentAlert('Viaje Cancelado Exitosamente!!!')
    })
  };

  /***************************************************************************************API********************************************************************************************/

  async userApiReg(users) {
    for (var i = 0; i < users.length; i++) {
      this.addUser(users[i].id, users[i].nombre, users[i].clave, users[i].id_rol);
    }
  }

  addUser(id, usuario, clave, id_rol) {
    let pic = '../../../assets/c.jpg';
    let state = '1';
    let data = [id, usuario, clave, id_rol, pic, state];
    return this.database.executeSql('INSERT or IGNORE INTO usuario(id_usuario, usuario, clave , rol ,foto, estado) VALUES (?,?,?,?,?,?)', data);
  }

  /******************************************************************************************************SEDE***********************************************************************************************************/
  buscarSede() {
    return this.database.executeSql('SELECT * FROM sede', []).then(res => {
      let items: Sede[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_sede: res.rows.item(i).id_sede,
            sede: res.rows.item(i).sede,
          })
        }
      }
      this.listaSede.next(items);
    })
  }

  /************************************************************************MODIFICAR ESTADO************************************************************************************/

  modificarEstado(id) {
    let data = [id];
    return this.database.executeSql('UPDATE usuario SET estado = 2 WHERE id_usuario = ?', data).then(data2 => {
      this.buscarUsuario2();
      this.buscarUsuario3();
    })
  }

  modificarEstado2(id) {
    let data = [id];
    return this.database.executeSql('UPDATE usuario SET estado = 1 WHERE id_usuario = ?', data).then(data2 => {
      this.buscarUsuario3();
      this.buscarUsuario2();
    })
  }

  buscarUsuario2() {
    return this.database.executeSql('SELECT * FROM usuario WHERE estado = 1 AND rol = 2', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            usuario: res.rows.item(i).usuario,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            clave: res.rows.item(i).clave,
            correo: res.rows.item(i).correo,
            estado: res.rows.item(i).estado,
            rol: res.rows.item(i).rol,
            foto: res.rows.item(i).foto,
          })
        }
      }
      this.listaUsuario2.next(items);
    })
  }

  buscarUsuario3() {
    return this.database.executeSql('SELECT * FROM usuario WHERE estado = 2 AND rol = 2', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            usuario: res.rows.item(i).usuario,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            clave: res.rows.item(i).clave,
            correo: res.rows.item(i).correo,
            estado: res.rows.item(i).estado,
            rol: res.rows.item(i).rol,
            foto: res.rows.item(i).foto,
          })
        }
      }
      this.listaUsuario3.next(items);
    })
  }

  /****************************************************************************************ALERT/TOAST***************************************************************************************/

  async presentAlert(msj: any) {
    const alert = await this.alertController.create({
      header: 'Mensaje del sistema',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentToast1() {
    const toast = await this.toastController.create({
      message: "Registro exitoso!!!",
      duration: 2000,
    });
    await toast.present();
  }
}