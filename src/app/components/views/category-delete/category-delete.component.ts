import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { CategoryGerenal } from '../categoriaGeneral.interface';

@Component({
  selector: 'app-category-delete',
  standalone: true,
  imports: [],
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent {
  
  constructor(private service: CategoriaService,private router: Router, private activedRoute: ActivatedRoute ) { }

  categoryDelete: CategoryGerenal = {
    id: 0,
    name: '',
    description: '',
  }


  ngOnInit(){
    this.categoryDelete.id = Number(this.activedRoute.snapshot.paramMap.get('id'))
    this.findById()
  }

  redirectToCategories() {
    this.router.navigate(["/category"]);
  }

  findById(): void{
    this.service.findById(Number(this.categoryDelete.id)).subscribe(resp =>{
      this.categoryDelete = resp
    });
  }

  deleteCategory(): void{
    this.service.delete(this.categoryDelete.id!).subscribe(resp => {
      this.router.navigate(['/category'])
      alert(`Categoria ${this.categoryDelete.name} deletada com sucesso!`)
    })
  }



}
