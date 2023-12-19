import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { ContainerComponent } from "./components/template/container/container.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    styles: [],
    imports: [CommonModule, RouterOutlet, HeaderComponent, ContainerComponent]
})
export class AppComponent {
  title = 'bookstore-front';
}
