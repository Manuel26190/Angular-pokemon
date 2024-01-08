import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppModuleTsModule } from './app.module';
import { PokemonService } from './pokemon/pokemon.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            CommonModule, 
            RouterOutlet, 
            AppModuleTsModule                        
          ],
  templateUrl: 'app.component.html',  
})
export class AppComponent  {  
}
