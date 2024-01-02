import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { CategoryGerenal } from '../categoriaGeneral.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {

  category: CategoryGerenal = {
    name: '',
    description: '',
  };

  constructor(private service: CategoriaService, private router: Router){ }

  create():void{ 
    this.service.create(this.category).subscribe( response => {
      this.router.navigate(['/category'])
      alert("Categoria Criada !");
    }, err => {
      alert("Campo(s) vazio(s) ou com poucos caracteres")
    })
  }


  redirectToIndex(){
    this.router.navigate([''])
  }
}