import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../../core/models/book.model';
import { ServiceBook } from '../../../core/services/book-service/service-book';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-book-update',
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './book-update.html',
  styleUrl: './book-update.css'
})
export class BookUpdate {


id : number | undefined;

book : Book | undefined;

// 1 Declartion du formGroup
monForm : FormGroup;

// 2 injection de FormBuilder
private readonly fb = inject(FormBuilder)

// booleen pour attendre la soumission du formulaire avant d'afficher les erreurs
isSubmitted : boolean = false;

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

  this.monForm = this.fb.group({
    title: ['' , [Validators.required]],
    Author: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required , Validators.min(0)]],
    genre: ['', [Validators.required]],
    coverImageUrl: ['', []]
  })

  if(this.book){
    this.monForm.patchValue(this.book)
  }
}

updateBook(){
  if(this.monForm.valid && this.book){
    const bookUpdated : Book = {
      id: this.book?.id,
      title: this.monForm.value.title,
      Author: this.monForm.value.Author,
      description: this.monForm.value.description,
      price: this.monForm.value.price,
      genre: this.monForm.value.genre,
      coverImageUrl: this.monForm.value.coverImageUrl,
      DateRelease : this.book?.DateRelease
    }


    this.bookService.updateBook(bookUpdated);
    this.router.navigate(['/books']);
  }else{
    this.isSubmitted = true;
    this.monForm.markAllAsTouched();
  }
}

deleteBook(id : number){
  this.bookService.deleteBook(id);
  this.router.navigate(['/books']);

}

}
