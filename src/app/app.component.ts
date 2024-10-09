import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {book} from "./Shared/Models/book";
import {NgForOf} from "@angular/common";
import {bookService} from "./Services/books.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

}





