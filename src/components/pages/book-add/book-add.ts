import { Component, inject } from '@angular/core';
import { AddBook } from '../../../core/models/add-book.model';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceBook } from '../../../core/services/book-service/service-book';
import { Router, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-book-add',
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    NgStyle
],
  templateUrl: './book-add.html',
  styleUrl: './book-add.css'
})
export class BookAdd {

  // version avec ngModel
// newBook : AddBook = {
//   title: '',
//   Author: '',
//   description: '',
//   price: 0,
//   genre: '',
//   coverImageUrl: ''
// }
// errorMessage : string = '';

// Utilisation des Formulaires Réactifs

// 1 Declaration du FormGroup
monForm : FormGroup;

// 2 injection du FormBuilder
private readonly fb = inject(FormBuilder)

//4 declaration du booleen pour ne declencher les erreurs qu'apres soumission
isSubmitted : boolean = false;
constructor() {
  // 3 Initialisation du FormGroup
  this.monForm = this.fb.group({
    title: ['' , [Validators.required]],
    Author:this.fb.array([new FormControl('', Validators.required)]),
    description: ['', [Validators.required]],
    price: [0, [Validators.required , Validators.min(0)]],
    genre: this.fb.array([new FormControl('', Validators.required)]),
    coverImageUrl: ['', []]
  })
}

private readonly bookService = inject(ServiceBook)
private readonly router = inject(Router);

addBook() : void {
if(this.monForm.valid){

  // Récupération des valeurs du formulaire par le nom du champ
  // et création d'un objet de type AddBook
const newBook : AddBook = {
  title: this.monForm.value.title,
  Author : this.monForm.value.Author,
  description: this.monForm.value.description,
  price: this.monForm.value.price,
  genre: this.monForm.value.genre,
  coverImageUrl: this.monForm.value.coverImageUrl
}

// recuperation d'une valeur par son nom de champ en string
const info = this.monForm.value['Author']

// transmission de l'objet au service a partir du formGroup.value
console.log(this.monForm.value);

// envoie du formulaire au service
//this.bookService.addBook(this.monForm.value);

// envoir de l'objet newBook au service
   this.bookService.addBook(newBook);

  this.router.navigate(['/books']);
}else{
  this.isSubmitted = true;
  this.monForm.markAllAsTouched();
}
}


// acceder au formArray Authors
get Authors() : FormArray {
  return this.monForm.get('Author') as FormArray;
}


// acceder au formArray genre
get Genres() : FormArray {
return this.monForm.get('genre') as FormArray
}

// ajouter un formControl dans le formArray Author
addAuthorInput(): void {
  this.Authors.push(new FormControl('', Validators.required));
}

// suppression d'un formControl dans le formArray Author
removeAuthorInput(index : number):void {
  this.Authors.removeAt(index);

}

// ajouter un formControl dans le formArray genre
addGenreInput():void {
  this.Genres.push(new FormControl('', Validators.required));
}

// suppression d'un formControl dans le formArray genre
removeGenreInput(index : number) : void{
  this.Genres.removeAt(index);
}


}
