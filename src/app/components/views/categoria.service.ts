import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryGerenal } from './categoriaGeneral.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: String = "https://cossolibrary.onrender.com";

  constructor(private http:HttpClient) { }

  findAll():Observable<CategoryGerenal[]>{
    const url = `${this.baseUrl}/category`
    return this.http.get<CategoryGerenal[]>(url)
  }

  create(category: CategoryGerenal): Observable<CategoryGerenal>{
    const url = `${this.baseUrl}/category`
    return this.http.post<CategoryGerenal>(url,category);
  }

  findById(id:Number): Observable<CategoryGerenal>{ 
    const url = `${this.baseUrl}/category/${id}`
    return this.http.get<CategoryGerenal>(url)

  }

  delete(id: Number): Observable<void>{
    const url = ` ${this.baseUrl}/category/${id}`
    return this.http.delete<void>(url)
  }

  update(categoryUpdate: CategoryGerenal): Observable<void>{
    const url = ` ${this.baseUrl}/category/${categoryUpdate.id}`
    return this.http.put<void>(url,categoryUpdate)
  }

}
