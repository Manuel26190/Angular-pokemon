import { Routes, RouterModule, Router } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component'; 
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component'; 
import { ErrorComponent } from '../error/error.component'; 
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
//import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent},
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent  },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: ErrorComponent  }
];




