import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule} from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HomePokedexComponent } from './home-pokedex/home-pokedex.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HomePokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
