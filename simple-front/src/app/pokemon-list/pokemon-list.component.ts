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
        pokemon.pokedexNumber.toString().indexOf(filterString.toLowerCase()) !== -1
      )));

  }

  iconPath(type: string) {

    if (type === "bug") {
      return `./assets/icons/pk-ico-bug.png`;
    } else if (type === "dark") {
      return `./assets/icons/pk-ico-dark.png`;
    } else if (type === "electric") {
      return `./assets/icons/pk-ico-eletric.png`;
    } else if (type === "dragon") {
      return `./assets/icons/pk-ico-dragon.png`;
    }else if (type === "fairy") {
      return `./assets/icons/pk-ico-fairy.png`;
    }else if (type === "fighting") {
      return `./assets/icons/pk-ico-fight.png`;
    }else if (type === "fire") {
      return `./assets/icons/pk-ico-fire.png`;
    }else if (type === "flying") {
      return `./assets/icons/pk-ico-fly.png`;
    }else if (type === "ghost") {
      return `./assets/icons/pk-ico-ghost.png`;
    }else if (type === "grass") {
      return `./assets/icons/pk-ico-grass.png`;
    }else if (type === "ground") {
      return `./assets/icons/pk-ico-ground.png`;
    }else if (type === "ice") {
      return `./assets/icons/pk-ico-ice.png`;
    }else if (type === "normal") {
      return `./assets/icons/pk-ico-normal.png`;
    }else if (type === "poison") {
      return `./assets/icons/pk-ico-poison.png`;
    }else if (type === "psychic") {
      return `./assets/icons/pk-ico-psyc.png`;
    }else if (type === "rock") {
      return `./assets/icons/pk-ico-rock.png`;
    }else if (type === "steel") {
      return `./assets/icons/pk-ico-steel.png`;
    }else if (type === "water") {
      return `./assets/icons/pk-ico-water.png`;
    }
  }

}
