import { LivroInterface } from './../livro.interface';
import { Component } from '@angular/core';
import { LivroService } from '../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './books-update.component.html',
  styleUrl: './books-update.component.css'
})
export class BooksUpdateComponent {

  bookUpdate: LivroInterface = {
    id: 0,
    name: '',
    description: '',
    autorship: ''
  }

  constructor(private bookService: LivroService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit():void{
    this.bookUpdate.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.findById()
  }

  update():void{
    this.bookService.update(this.bookUpdate).subscribe(aws => {
      alert("Categoria Atualizada com sucesso")
      this.router.navigate(['/category/books'])
    })
  }

  redirectToCategories(){
    this.router.navigate(['/category/books'])
  }
  findById(){
    this.bookService.findById(this.bookUpdate.id!).subscribe(aws =>{
      this.bookUpdate = aws
    })
  }
}


