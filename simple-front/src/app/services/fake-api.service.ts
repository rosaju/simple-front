import { Injectable } from '@angular/core';
import { ListaLivros } from '../models/ListaLivros';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<ListaLivros> {
    return this.http.get<ListaLivros>(
      `https://api-livros.herokuapp.com/livros`
    );
  }

}
