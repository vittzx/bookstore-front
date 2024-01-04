import { Component } from '@angular/core';
import { CategoryGerenal } from '../categoriaGeneral.interface';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})

export class CategoryUpdateComponent {

  constructor(private service: CategoriaService, private activeRoute: ActivatedRoute,private route: Router) { }

  categoryUpdate: CategoryGerenal = {
    id:0,
    name: '',
    description: ''
  }

  ngOnInit(): void{
    this.categoryUpdate.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoryUpdate.id!).subscribe(resp => {
      this.categoryUpdate = resp
    })
  }

  update():void {
    this.service.update(this.categoryUpdate).subscribe(resp => {
      alert("Categoria atualizada com sucesso!")
      this.route.navigate(['/category']);
    },err=>{
      console.log(err)
    })
  }

  
  redirectToCategories() {
    this.route.navigate(["/category"]);
  }


}
