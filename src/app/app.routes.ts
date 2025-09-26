import { Routes } from '@angular/router';
import { BookList } from '../components/pages/book-list/book-list';
import { BookAdd } from '../components/pages/book-add/book-add';
import { BookUpdate } from '../components/pages/book-update/book-update';
import { BookDetails } from '../components/pages/book-details/book-details';
import { Homepage } from '../components/pages/homepage/homepage';

export const routes: Routes = [
    
    {path : '' , component : Homepage},
    {path : 'books' , component : BookList},
    {path : 'book-details/:id' , component : BookDetails},
    // limiter l'acces a ces routes aux utilisateurs authentifies
    // {path : 'book-add' , loadComponent : () => import('route vers le composant').then(c => c.Composant)},
    {path : 'book-add' , component : BookAdd},
    {path : 'book-edit/:id' , component : BookUpdate},

];
