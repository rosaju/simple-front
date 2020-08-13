import { Injectable } from '@angular/core';
import { BooksList } from '../models/BooksList';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  readonly apiURL: string;

  constructor(public http: HttpClient) { 
    this.apiURL = `https://api-livros.herokuapp.com`;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getBooks(): Observable<BooksList[]> {
    return this.http.get<BooksList[]>(`${ this.apiURL }/livros`);
  }
}