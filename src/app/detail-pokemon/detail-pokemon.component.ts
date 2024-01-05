import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html'  
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute) { } // injecte dans le componsant le service route (activate route) et le rend disponible

  ngOnInit() { 
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id'); //Recup de l'id contenu dans l'url
    //console.log(this.route.snapshot.paramMap.get('id'));
    //console.log(pokemonId);
    //console.log(this.pokemonList)    

    if (pokemonId){// si mon id est trouvé dans l'url, j'attache le pokemon qui correspond id a pokemonId
       this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
    console.log(this.pokemon)
  }

}
