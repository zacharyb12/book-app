import { Component, inject } from '@angular/core';
import { Book } from '../../../core/models/book.model';
import { DatePipe } from '@angular/common';
import { ServiceBook } from '../../../core/services/book-service/service-book';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetails {

id : number | undefined;

book : Book | undefined;

// injecter le service bookService
private readonly bookService = inject(ServiceBook)

// Recuperer l'information au chargement du composant 
// Necessite l'ActivatedRoute pour recuperer l'id dans la route
private readonly activRoute = inject(ActivatedRoute)


constructor() {
  this.id = +this.activRoute.snapshot.params['id']

  this.book = this.bookService.getBookById(this.id);
}
}
