import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { CategoryGerenal } from '../categoriaGeneral.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-categoria',
    standalone: true,
    templateUrl: './categoria.component.html',
    styleUrl: './categoria.component.css',
    imports: [CommonModule]
})
export class CategoriaComponent {

  constructor(private service: CategoriaService, private router: Router) { }

  categoriesByUrl: CategoryGerenal[] = [];

  ngOnInit(){
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe( resp => {
      this.categoriesByUrl = resp;
    })
  }

  redirectToCreateCategory(){
    this.router.navigate(["category/create"])
  }
    
 }
