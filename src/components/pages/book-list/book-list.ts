import { Component, inject, signal } from '@angular/core';
import { Book } from '../../../core/models/book.model';
import { ServiceBook } from '../../../core/services/book-service/service-book';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HoverBorder } from "../../../core/directives/hover-border/hover-border";
import { AuthService } from '../../../core/services/auth-service/auth-service';

@Component({
  selector: 'app-book-list',
  imports: [
    DatePipe,
    HoverBorder,
    RouterLink
],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {

books : Book[] = [];

isAdminBookList = signal<boolean>(false);

// injection du service avec le constructeur ou le inject

// book service pour acceder a la logique lié aux livres
private readonly bookService = inject(ServiceBook);

// injection du authService
private readonly authService = inject(AuthService);


// router pour rediriger l'utilisateur
private readonly router = inject(Router);

constructor() {
  this.books = this.bookService.getBooks();
  this.isAdminBookList = this.authService.isAdminService;
}


navigateToDetails(id : number): void{
  this.router.navigate(['/book-details', id]);
}

navigateToUpdate(id : number): void{
  this.router.navigate(['/book-edit', id]);
}

}
