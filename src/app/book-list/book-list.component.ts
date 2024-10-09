import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { BookListItemComponent } from "../book-list-item/book-list-item.component";
import {bookService} from "../Services/books.service";
import {book} from "../Shared/Models/book";

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
export class BookListComponent implements OnInit {

  displayedColumns:string[]= ['id', 'bookName', 'type', 'authorName', 'sale'];
  books: book[] = [];

  constructor (private service: bookService){
    //this constructor is primarily used for dependency injection
  }

  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.service.getStudents().subscribe({
      next: (data: book[]) => this.books = data,
      error:err => console.error("Error fetching Books", err),
      complete:() => console.log("Book data fetch complete!")
    })

  }

  selectedBook?: book;
  selectStudent(student: book): void {
    this.selectedBook = book;
  }

}
