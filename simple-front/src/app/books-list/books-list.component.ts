import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../service/fake-api.service';
import { BooksList } from '../models/BooksList';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  filteredBooks$: Observable<BooksList[]>;
  filter: FormControl;
  constructor(private fakeApiService: FakeApiService) {
    this.filter = new FormControl('');
  }

  ngOnInit(): void {

    this.filteredBooks$ = combineLatest(this.fakeApiService.getBooks(), this.filter.valueChanges.pipe(startWith('')))
    .pipe(
      map(([books, filterString]) => books.filter(book =>
        !filterString ||
        book.titulo.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
        book.escritor.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)));
  }

}
