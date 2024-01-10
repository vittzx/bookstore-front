import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [CommonModule, RouterLink]
})
export class ContainerComponent {

}
