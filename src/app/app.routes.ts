import { Routes } from '@angular/router';
import { ContainerComponent } from './components/template/container/container.component';
import { CategoriaComponent } from './components/views/categoria/categoria.component';

export const routes: Routes = [
    {
        path: '',
        component: ContainerComponent
    },
    {
        path: 'category',
        component: CategoriaComponent
    }
];
