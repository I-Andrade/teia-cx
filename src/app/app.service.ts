import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from './models/foto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private urlApi = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(private http: HttpClient) {}

  public buscarFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.urlApi);
  }
}
