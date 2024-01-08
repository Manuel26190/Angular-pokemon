import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pokemon',
  standalone: false,
  //imports: [],
  templateUrl: './list-pokemon.component.html'  
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
  //pokemonSelected: Pokemon | undefined; 

  constructor(private router: Router){  }

  goToPokemonDetails(pokemon: Pokemon){
    this.router.navigate(['/pokemon',pokemon.id])
  }

}
