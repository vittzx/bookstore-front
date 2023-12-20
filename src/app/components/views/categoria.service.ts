import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryGerenal } from './categoriaGeneral.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient) { }

  findAll():Observable<CategoryGerenal[]>{
    const url = `${this.baseUrl}/category`
    return this.http.get<CategoryGerenal[]>(url)
  }
}
