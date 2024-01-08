import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModule } from './pokemon/pokemon.module';
//import { PokemonService } from './pokemon/pokemon.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonModule,    
  ],
  //providers: [PokemonService]
})
export class AppModuleTsModule { }
