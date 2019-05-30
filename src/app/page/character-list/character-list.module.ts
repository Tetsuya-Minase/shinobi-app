import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterListComponent} from './component/character-list.component';
import {CharacterListService} from './service/character-list.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CharacterListComponent
  ],
  exports: [
    CharacterListComponent
  ],
  providers: [
    CharacterListService
  ]
})
export class CharacterListModule { }
