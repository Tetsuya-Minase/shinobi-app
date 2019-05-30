import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterDetailComponent} from './component/character-detail.component';
import {MainGridComponent} from './component/main-grid/main-grid.component';
import {GridComponent} from './component/main-grid/grid/grid.component';
import {ItemSecretsComponent} from './component/item-secrets/item-secrets.component';
import {BackgroundComponent} from './component/background/background.component';
import {ArtsSettingComponent} from './component/artssetting/arts-setting.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonComponentModule} from '../../common/component/common-component.module';
import {MaterialModule} from '../../common/module/material.module';
import {CharacterDetailServicesModule} from './service/character-detail-services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentModule,
    MaterialModule,
    CharacterDetailServicesModule
  ],
  declarations: [
    CharacterDetailComponent,
    MainGridComponent,
    GridComponent,
    ItemSecretsComponent,
    BackgroundComponent,
    ArtsSettingComponent
  ],
  exports: [
    CharacterDetailComponent
  ]
})
export class CharacterDetailModule {
}
