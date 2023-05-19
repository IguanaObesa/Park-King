import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Contecnt-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }

  apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos'

  constructor(private http:HttpClient) { }
  
  getApi():Observable <any>{
    return this.http.get(this.apiURL+'/users').pipe(
      retry(3)
    );
  };
}