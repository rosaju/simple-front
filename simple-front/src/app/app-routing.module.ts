import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePokedexComponent } from './home-pokedex/home-pokedex.component';

const routes: Routes = [
  {
    path: '',
    component: HomePokedexComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
