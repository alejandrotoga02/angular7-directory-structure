import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  get(path: string, headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })): Observable<any> {
    return this.http.get(`${environment.apiURL}${path}`, { headers });
  }

  post(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiURL}${path}`,
      body
    );
  }

  put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiURL}${path}`,
      body
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiURL}${path}`
    );
  }



}
