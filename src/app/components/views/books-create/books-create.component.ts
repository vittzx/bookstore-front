import { Component } from '@angular/core';
import { LivroService } from '../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroInterface } from '../livro.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './books-create.component.html',
  styleUrl: './books-create.component.css'
})
export class BooksCreateComponent {

  bookCreate: LivroInterface = {
    id: 0,
    name: '',
    description: '',
    autorship: ''
  }

  idcat: Number =0;

  constructor(private bookService:LivroService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.idcat = Number(this.activedRoute.snapshot.paramMap.get('id'))
    
  }

  create():void{
    this.bookService.create(this.bookCreate,this.idcat).subscribe(aws =>{
      alert("Livro criar com sucesso")
      this.router.navigate([`/category/${this.idcat}`])
    })
  }

  cancelCreateBook():void{
    this.router.navigate([`/category/${this.idcat}`])
  }

}
