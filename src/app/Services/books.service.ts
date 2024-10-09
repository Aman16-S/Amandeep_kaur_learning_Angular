import { Injectable } from '@angular/core';
import {books} from "../Shared/mockbook";
import { Observable, of } from 'rxjs';
import {book} from "../Shared/Models/book";

@Injectable({
  providedIn: 'root'
})

export class bookService {

  getStudents(): Observable<book[]>{
    return of(books); //Return and observable that emits mock student data
  }

}
