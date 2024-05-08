import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-list-pokemon',
  standalone: false,  
  templateUrl: './list-pokemon.component.html',   
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];  

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
      this.pokemonList = this.pokemonService.getPokemonList()   }

  goToPokemonDetails(pokemon: Pokemon){
    this.router.navigate(['/pokemon',pokemon.id])
  }

}
