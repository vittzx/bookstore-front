import { Routes } from '@angular/router';
import { ContainerComponent } from './components/template/container/container.component';
import { CategoriaComponent } from './components/views/categoria/categoria.component';
import { CategoryCreateComponent } from './components/views/category-create/category-create.component';

export const routes: Routes = [
    {
        path: '',
        component: ContainerComponent
    },
    {
        path: 'category',
        component: CategoriaComponent
    },
    {
        path: 'category/create',
        component: CategoryCreateComponent
    },

];
