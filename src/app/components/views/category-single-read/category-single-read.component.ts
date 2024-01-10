import { CategorySingle } from './../categoriaSingle.interface';
import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-single-read',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-single-read.component.html',
  styleUrl: './category-single-read.component.css'
})
export class CategorySingleReadComponent {
  constructor(private service: CategoriaService, private router: Router, private activedRoute: ActivatedRoute) { }

  categorySingle: CategorySingle = {
    id: 0,
    name: '',
    description: '',
    books: []
  };

  ngOnInit(){
    this.categorySingle.id = Number(this.activedRoute.snapshot.paramMap.get('id'))
    this.findById()
  }

  findById(): void{
    this.service.findByIdCatSingle(Number(this.categorySingle.id)).subscribe(resp =>{
      this.categorySingle = resp
    });
  }
}
