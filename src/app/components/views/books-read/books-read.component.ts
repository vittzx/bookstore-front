import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LivroInterface } from '../livro.interface';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-read.component.html',
  styleUrl: './books-read.component.css'
})
export class BooksReadComponent {

  constructor(private service: LivroService, private router: Router) { }

  books: LivroInterface[] = [];

  ngOnInit(){
    this.findAll()
  }

  findAll(){
    this.service.findAll().subscribe( resp => {
      this.books = resp;
    })
  }

}
