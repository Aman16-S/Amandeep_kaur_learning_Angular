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



}
