import { Component, inject } from '@angular/core';
import { AddBook } from '../../../core/models/add-book.model';
import { FormsModule } from '@angular/forms';
import { ServiceBook } from '../../../core/services/book-service/service-book';
import { Router, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-book-add',
  imports: [
    FormsModule,
    RouterLink
],
  templateUrl: './book-add.html',
  styleUrl: './book-add.css'
})
export class BookAdd {

newBook : AddBook = {
  title: '',
  Author: '',
  description: '',
  price: 0,
  genre: '',
  coverImageUrl: ''
}

errorMessage : string = '';

private readonly bookService = inject(ServiceBook)
private readonly router = inject(Router);

addBook() : void {
  this.bookService.addBook(this.newBook);
  this.router.navigate(['/books']);
}


}
