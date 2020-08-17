import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { PokemonService } from '../service/pokemon.service';
import { PokemonList } from '../models/PokemonList';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  filteredPokemons$: Observable<PokemonList[]>;
  filter = new FormControl('');

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.filteredPokemons$ = combineLatest(this.pokemonService.getPokemonSpecies(), this.filter.valueChanges.pipe(startWith('')))
    .pipe(
      map(([pokemons, filterString]) => pokemons.filter(pokemon =>
        !filterString ||
        pokemon.englishName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
        pokemon.japaneseName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
        pokemon.primaryType.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
        pokemon.secondaryType.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
        pokemon.pokedexNumber.toString().indexOf(filterString.toLowerCase()) !== -1)));

  }

}
