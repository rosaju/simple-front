import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../service/fake-api.service';
import { BooksList } from '../models/BooksList';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: BooksList[]; 

  constructor(private fakeApiService: FakeApiService) { }

  ngOnInit(): void {
    this.displayBooksList();
  }

  displayBooksList() {
    this.fakeApiService.getBooks().subscribe( resp => {
      this.books = resp;
    });
  }

}
