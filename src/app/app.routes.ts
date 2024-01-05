import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent  },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: ErrorComponent  }
];
