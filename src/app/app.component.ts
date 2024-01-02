import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            HighlightDirective,            
            ListPokemonComponent,
            DetailPokemonComponent
          ],
  templateUrl: 'app.component.html',  
})
export class AppComponent  {
  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon | undefined;

  // ngOnInit() {
  //   //console.table(this.pokemonList);
  // }
  // selectPokemon(pokemonId: string) {
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
  //   if (pokemon) {
  //     console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log(`vous avez demandé un pokemon qui n'éxiste pas.`);
  //     this.pokemonSelected = pokemon;
  //   }
  // }
}
