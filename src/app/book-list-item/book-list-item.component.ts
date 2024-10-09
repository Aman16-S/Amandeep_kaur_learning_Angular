import {Component, Input} from '@angular/core';
import {books} from "../Shared/Models/book";
import {NgIf} from "@angular/common";
import {books} from "../Shared/mockbook";
@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css'
})
export class BookListItemComponent {
  /**
   * Input marks the property as an input property
   * that can receive data from a parent
   * ? says it is optional
   */

}
