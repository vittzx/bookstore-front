import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  categoryGeneral = {
    id: 1,
    name: "Test",
    description: "Test"
  };


  categoriesGeneral =[this.categoryGeneral, 
  {
    id: 2,
    name: "Test2",
    description: "test2"
  }]
}
