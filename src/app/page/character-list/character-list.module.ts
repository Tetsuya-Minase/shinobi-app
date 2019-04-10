import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterListComponent} from './component/character-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CharacterListComponent
  ],
  exports: [
    CharacterListComponent
  ]
})
export class CharacterListModule { }
