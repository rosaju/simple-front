import { Injectable } from '@angular/core';
import { PokemonList } from '../models/PokemonList';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  readonly pokemonApiURL: string;

  constructor(public http: HttpClient) {
    this.pokemonApiURL = `https://pokedex-node-api.herokuapp.com`;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getPokemonSpecies(): Observable<PokemonList[]> {
    return this.http.get<PokemonList[]>(`${this.pokemonApiURL}/pokemon-infos`);
  }
}

