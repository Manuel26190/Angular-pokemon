import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon',
  standalone: false,  
  templateUrl: './detail-pokemon.component.html'  
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
    ) { } // injecte dans le componsant le service route (activate route) et le rend disponible

  ngOnInit() { 
    
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id'); //Recup de l'id contenu dans l'url
    
    if (pokemonId){// si mon id est trouvé dans l'url, j'attache le pokemon qui correspond id a pokemonId
       this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }    
  }

 goToPokemonList(){
  this.router.navigate(['/pokemons'])
  }

}
