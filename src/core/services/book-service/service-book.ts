import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { AddBook } from '../../models/add-book.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceBook {
  

books : Book[] = [
  {
    id: 1,
    title: "The Silent Forest",
    Author: ["Emma Johnson"," David Smith"],
    description: "A mystery novel set in a remote forest village.",
    coverImageUrl: "assets/images/book1.jpg",
    price: 19.99,
    DateRelease: new Date("2021-03-15"),
    genre: ["Mystery","suspens"],
  },
  {
    id: 2,
    title: "Journey to the Stars",
    Author: ["Michael Lee"],
    description: "A science fiction adventure across galaxies.",
    coverImageUrl: "assets/images/book2.jpg",
    price: 24.5,
    DateRelease: new Date("2020-11-05"),
    genre: ["Science Fiction"],
  },
  {
    id: 3,
    title: "Cooking with Love",
    Author: ["Sophia Martinez"],
    description: "A cookbook filled with delicious family recipes.",
    coverImageUrl: "assets/images/book3.jpg",
    price: 15.0,
    DateRelease: new Date("2022-01-10"),
    genre: ["Cooking"],
  },
  {
    id: 4,
    title: "History of the Ancient World",
    Author: ["David Thompson"],
    description: "A deep dive into civilizations of the ancient world.",
    coverImageUrl: "assets/images/book4.jpg",
    price: 29.99,
    DateRelease: new Date("2019-06-21"),
    genre: ["History"],
  },
  {
    id: 5,
    title: "The Art of Mindfulness",
    Author: ["Linda Carter"],
    description: "A guide to living in the moment with mindfulness techniques.",
    coverImageUrl: "assets/images/book5.jpg",
    price: 18.75,
    DateRelease: new Date("2021-09-14"),
    genre: ["Self-Help"],
  },
  {
    id: 6,
    title: "Shadows of the Past",
    Author: ["Robert Wilson"],
    description: "A thrilling crime story full of twists and turns.",
    coverImageUrl: "assets/images/book6.jpg",
    price: 22.0,
    DateRelease: new Date("2023-02-01"),
    genre: ["Thriller"],
  },
  {
    id: 7,
    title: "The Last Kingdom",
    Author: ["Hannah Brown"],
    description: "An epic fantasy tale of kingdoms and battles.",
    coverImageUrl: "assets/images/book7.jpg",
    price: 27.5,
    DateRelease: new Date("2020-12-12"),
    genre: ["Fantasy"],
  },
  {
    id: 8,
    title: "Digital Future",
    Author: ["Chris Evans"],
    description: "Exploring the impact of technology on society.",
    coverImageUrl: "assets/images/book8.jpg",
    price: 20.0,
    DateRelease: new Date("2022-05-09"),
    genre: ["Technology"],
  },
  {
    id: 9,
    title: "Poems from the Heart",
    Author: ["Isabella Clark"],
    description: "A collection of heartfelt and inspiring poems.",
    coverImageUrl: "assets/images/book9.jpg",
    price: 14.99,
    DateRelease: new Date("2018-08-23"),
    genre: ["Poetry"],
  },
  {
    id: 10,
    title: "The Entrepreneur's Guide",
    Author: ["James Miller"],
    description: "Strategies and tips for building a successful business.",
    coverImageUrl: "assets/images/book10.jpg",
    price: 25.0,
    DateRelease: new Date("2021-07-30"),
    genre: ["Business"],
  }
];


getBooks() : Book[]{
return this.books;
}

addBook(newBook : AddBook ) : void {
const bookToAdd : Book = {
  id : this.books.length + 1,
  title : newBook.title,
  Author : newBook.Author,
  DateRelease : new Date(),
  description : newBook.description,
  coverImageUrl : newBook.coverImageUrl,
  price : newBook.price,
  genre : newBook.genre
};

this.books.push(bookToAdd);  

}


getBookById(id : number) : Book | undefined{

const bookToFind = this.books.find(b => b.id === id);

if(!bookToFind){
  return undefined;
}

return bookToFind;

}

updateBook(book : Book) : void{
const bookToUpdate = this.books.find(b => b.id === book.id);

if(!bookToUpdate){
return;
}

bookToUpdate.Author = book.Author;
bookToUpdate.coverImageUrl = book.coverImageUrl;
bookToUpdate.description = book.description;
bookToUpdate.genre = book.genre;
bookToUpdate.price = book.price;
bookToUpdate.title = book.title;
bookToUpdate.DateRelease = book.DateRelease;


// const index = this.books.findIndex(b => b.id === book.id);
// this.books[index] = book;

}

deleteBook(id : number) : void {
this.books = this.books.filter(b => b.id !== id);
}

}