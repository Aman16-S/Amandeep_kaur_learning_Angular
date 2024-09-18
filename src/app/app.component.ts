import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {book} from "../book";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Book Generation';

  books: book[]  = [
   {id: 1, bookName: 'The Great Getsby', type: 'fiction', authorName: 'F. Scott Fitzgerald', sale: 100},
   {id: 2, bookName: '1984', type: 'Dystopian', authorName: 'George Orwell', sale: 200},
   {id: 3, bookName: 'To Kill a Mockingbird', type: 'fiction', authorName: 'Harper Lee', sale: 150},
   {id: 4, bookName: 'The Catcher in the Rye', type: 'fiction', authorName: 'J.D. Salinger', sale: 75},
   {id: 5, bookName: 'Pride and Prejudice', type: 'Romance', authorName: 'Jane Austen', sale: 120},
   {id: 6, bookName: 'The Hobbit', type: 'Fantasy', authorName: 'J.R.R. Tolkien', sale: 300},
];
}


