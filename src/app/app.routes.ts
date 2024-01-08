import { CategoryUpdateComponent } from './components/views/category-update/category-update.component';
import { Routes } from '@angular/router';
import { ContainerComponent } from './components/template/container/container.component';
import { CategoriaComponent } from './components/views/categoria/categoria.component';
import { CategoryCreateComponent } from './components/views/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/views/category-delete/category-delete.component';
import { BooksReadComponent } from './components/views/books-read/books-read.component';
import { CategorySingleReadComponent } from './components/views/category-single-read/category-single-read.component';
import { BooksCreateComponent } from './components/views/books-create/books-create.component';
import { BooksUpdateComponent } from './components/views/books-update/books-update.component';
import { BookDeleteComponent } from './components/views/book-delete/book-delete.component';
import { AboutComponent } from './components/index/about/about.component';

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
    {
        path: 'category/delete/:id',
        component: CategoryDeleteComponent
    },
    {
        path: 'category/update/:id',
        component: CategoryUpdateComponent
    },
    {
        path: 'category/books',
        component: BooksReadComponent
    },
    {
        path: 'category/:id',
        component: CategorySingleReadComponent
    },
    {
        path: 'category/:id/books/create',
        component: BooksCreateComponent
    },
    {
        path: 'category/books/update/:id',
        component: BooksUpdateComponent
    },
    {
        path: 'category/books/delete/:id',
        component: BookDeleteComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    

];
