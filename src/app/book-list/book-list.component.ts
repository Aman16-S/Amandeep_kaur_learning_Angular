import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { BookListItemComponent } from "../book-list-item/book-list-item.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    NgForOf,
    BookListItemComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  bookItems = [
    { id: 1, bookName: 'Norwegian Wood', type: 'Fiction', authorName: 'Haruki Murakami', sale: 12000 },
    { id: 2, bookName: 'The Great Gatsby', type: 'Classic', authorName: 'F. Scott Fitzgerald', sale: 18000 },
    { id: 3, bookName: '1984', type: 'Dystopian', authorName: 'George Orwell', sale: 22000 },
    { id: 4, bookName: 'The Alchemist', type: 'Adventure', authorName: 'Paulo Coelho', sale: 15000 },
  ];


  selectedBookItem: any;

  selectBookItem(item: any) {
    this.selectedBookItem = item;
  }

}
