import { Component } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroInterface } from '../livro.interface';

@Component({
  selector: 'app-book-delete',
  standalone: true,
  imports: [],
  templateUrl: './book-delete.component.html',
  styleUrl: './book-delete.component.css'
})
export class BookDeleteComponent {
  constructor(private service: LivroService,private router: Router, private activedRoute: ActivatedRoute ) { }

    bookDelete : LivroInterface = {
    id: 0,
    name: '',
    description: '',
    autorship: ''
  }


  ngOnInit(){
    this.bookDelete.id = Number(this.activedRoute.snapshot.paramMap.get('id'))
    this.findById()
  }

  redirectToBooks() {
    this.router.navigate(["/category/books"]);
  }

  findById(): void{
    this.service.findById(Number(this.bookDelete.id)).subscribe(resp =>{
      this.bookDelete = resp
    });
  }

  deleteBook(): void{
    this.service.delete(this.bookDelete.id!).subscribe(resp => {
      this.router.navigate(['/category'])
      alert(`Livro ${this.bookDelete.name} deletado com sucesso!`)
    })
  }

}
