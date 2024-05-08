import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
        
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormsModule, 
    PokemonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModuleTsModule { }
