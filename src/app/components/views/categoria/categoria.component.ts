import { Component } from '@angular/core';

@Component({
    selector: 'app-categoria',
    standalone: true,
    templateUrl: './categoria.component.html',
    styleUrl: './categoria.component.css',
    imports: []
})
export class CategoriaComponent {
    categoryGeneral = {
        id: 1,
        name: "Test",
        description: "Que inconstância é essa, menina? Que coisa é essa que você quer e após dois minutos enjoa?"
      };
    
    
      categoriesGeneral =[this.categoryGeneral, 
      {
        id: 2,
        name: "Test2",
        description: "test2"
      }]
    
 }
