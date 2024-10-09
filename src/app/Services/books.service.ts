import { Injectable } from '@angular/core';
import {books} from "../Shared/mockbook";
import { Observable, of } from 'rxjs';
import {book} from "../Shared/Models/book";

@Injectable({
  providedIn: 'root'
})

export class bookService {
  private books: book[] = books;

  getStudents(): Observable<book[]>{
    return of(books);
  }

  addBook(newStudent:book) : Observable<book[]>{
    this.books.push(newStudent)
    return of(this.books);
  }

  //Update an Existing user
  updateBook(updatedBook: book): Observable<book[]> {
    const index = this.books.findIndex(user => user.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    return of(this.books);
  }
  //Delete: Remove a user by ID
  deleteBooks(bookId: number): Observable<book[]> {
    this.books = this.books.filter(user => user.id !== bookId);
    return of(this.books);
  }
  getStudentById(studentId: number): Observable<book | undefined> {
    const student = this.books.find(user => user.id === studentId);
    return of(student);
  }

}
