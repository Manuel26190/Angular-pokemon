import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ErrorComponent } from './error/error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            HighlightDirective,            
            ListPokemonComponent,
            DetailPokemonComponent,
            ErrorComponent
          ],
  templateUrl: 'app.component.html',  
})
export class AppComponent  {  
}
