import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-delete',
  standalone: true,
  imports: [],
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent {
  
  constructor(private router: Router) { }

  redirectToCategories() {
    this.router.navigate(["/category"]);
  }

}
