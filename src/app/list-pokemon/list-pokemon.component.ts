import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [BorderCardDirective, PokemonTypeColorPipe, CommonModule],
  templateUrl: './list-pokemon.component.html'  
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez demandé un pokemon qui n'éxiste pas.`);
      this.pokemonSelected = pokemon;
    }
  }

}
