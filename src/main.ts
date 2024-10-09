import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {provideRouter, Routes} from '@angular/router';
import { AppComponent } from './app/app.component';
import {BookListItemComponent} from "./app/book-list-item/book-list-item.component";
import {BookListComponent} from "./app/book-list/book-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  {path:'', redirectTo:'/books', pathMatch: 'full'}
  {path:'books', component: BookListComponent},
  {path:'books/:id', component: BookListItemComponent},
  {path: 'modify-list-item', componet: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}// Wildcard route for a 404 page

]
bootstrapApplication(AppComponent, {
  providers: [provideRouter (routes)]
}).then(r=> console.log('Bootstrap successful'));
