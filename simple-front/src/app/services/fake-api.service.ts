import { Injectable } from '@angular/core';
import { BooksList } from '../models/BooksList';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<BooksList> {
    return this.http.get<BooksList>(
      `https://api-livros.herokuapp.com/livros`
    );
  }

}
