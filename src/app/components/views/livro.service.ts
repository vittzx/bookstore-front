import { Injectable } from '@angular/core';
import { LivroInterface } from './livro.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private baseUrl: String = "https://cossolibrary.onrender.com";

  constructor(private http:HttpClient) { }

  findAll():Observable<LivroInterface[]>{
    const url = `${this.baseUrl}/category/book`
    return this.http.get<LivroInterface[]>(url)
  }

  findById(id:Number): Observable<LivroInterface>{ 
    const url = `${this.baseUrl}/category/book/${id}`
    return this.http.get<LivroInterface>(url)
  }

  create(book: LivroInterface, id_cat:Number):Observable<LivroInterface>{
    const url = `${this.baseUrl}/category/book?category=${id_cat}`
    return this.http.post<LivroInterface>(url,book);
  }
  
  update(book: LivroInterface):Observable<LivroInterface>{
    const url = `${this.baseUrl}/category/book/${book.id}`
    return this.http.put<LivroInterface>(url, book);
  }

  
  delete(id: Number): Observable<void>{
    const url = ` ${this.baseUrl}/category/book/${id}`
    return this.http.delete<void>(url)
  }

  

}
