import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorias } from './categorias';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiUrl: string = environment.apiUrl + '/categorias';

  constructor(private http: HttpClient) { }

  salvar(categoria: Categorias) : Observable<Categorias>{
    return this.http.post<Categorias>(this.apiUrl, categoria);
  }

  obterTodas() : Observable<Categorias[]>{
    return this.http.get<Categorias[]>(this.apiUrl);
  }
}
