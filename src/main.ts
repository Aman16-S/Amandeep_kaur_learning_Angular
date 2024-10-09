import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {provideRouter, Routes} from '@angular/router';
import { AppComponent } from './app/app.component';
import {BookListItemComponent} from "./app/book-list-item/book-list-item.component";
import {BookListComponent} from "./app/book-list/book-list.component";

const routes: Routes = [
  {path:'', redirectTo:'/books', pathMatch: 'full'}
  {path:'books', component: BookListComponent},
  {path:'books/:id', component: BookListItemComponent}
]
bootstrapApplication(AppComponent, {
  providers: [provideRouter (routes)]
}).then(r=> console.log('Bootstrap successful'));
