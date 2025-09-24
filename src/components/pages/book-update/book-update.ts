import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../core/models/book.model';
import { ServiceBook } from '../../../core/services/book-service/service-book';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-update',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './book-update.html',
  styleUrl: './book-update.css'
})
export class BookUpdate {


id : number | undefined;

book : Book | undefined;

// injection du service Book
private readonly bookService = inject(ServiceBook);
// injection de l'activated route
private readonly activRoute = inject(ActivatedRoute);
// injection du router pour la redirection
private readonly router = inject(Router)

constructor(){
  // recuperation de l'id dans l'url
  this.id = +this.activRoute.snapshot.params['id'];

  // recuperation du book via son id
  const result = this.bookService.getBookById(this.id);
  
  if(result){
    this.book = result;
  }
  else{
    // si aucun livre n'est trouve, redirection vers la liste des livres
  this.router.navigate(['/books']);
  }
}

updateBook(){
  if(this.book){
    this.bookService.updateBook(this.book);
    this.router.navigate(['/books']);
  }
}

deleteBook(id : number){
  this.bookService.deleteBook(id);
  this.router.navigate(['/books']);

}

}
