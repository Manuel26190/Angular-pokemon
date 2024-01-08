import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './pokemon/highlight.directive';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component'; 
import { ErrorComponent } from './error/error.component';
import { PokemonModule } from './pokemon/pokemon.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            //HighlightDirective,            
            //ListPokemonComponent,
            //DetailPokemonComponent,
            ErrorComponent,
            PokemonModule
          ],
  templateUrl: 'app.component.html',  
})
export class AppComponent  {  
}
