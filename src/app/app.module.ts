import { DataShareService } from './service/data-share.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './common/material.module';
import { AppComponent } from './app.component';
import { DbService } from './service/db.service';
import { ROUTES } from './app.routing';
import { LoginGuardGuard } from './guard/login-guard.guard';

import { ArtsModalComponent } from './modal/arts-modal/arts-modal.component';
import { MainGridComponent } from './component/character-detail/main-grid/main-grid.component';
import { ArtsSettingComponent } from './component/character-detail/artssetting/arts-setting.component';
import { ItemSecretsComponent } from './component/character-detail/item-secrets/item-secrets.component';
import { BackgroundComponent } from './component/character-detail/background/background.component';
import { ReferModalComponent } from './modal/refer-modal/refer-modal.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { TopComponent } from './component/top/top.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { CharacterListComponent } from './component/character-list/character-list.component';
import { HeaderComponent } from './component/header/header.component';
import { MyPageComponent } from './component/my-page/my-page.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { ArtsComponent } from './modal/arts-modal/arts/arts.component';
import { FormValidationNgComponent } from './component/form-validation-ng/form-validation-ng.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducer/index.reducer';
import { artsSettingReducer } from './reducer/arts-setting.reducer';
import { backgroundReducer } from './reducer/background.reducer';
import { GridComponent } from './component/character-detail/main-grid/grid/grid.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgGridModule.withComponents([]),
    ROUTES,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({artsSetting: artsSettingReducer, background: backgroundReducer}),
    StoreModule.forRoot(reducers),
    // StoreModule.forFeature('artsSetting', artsSettingReducer),
    // StoreModule.forFeature('background', backgroundReducer)
  ],
  declarations: [
    AppComponent,
    MainGridComponent,
    ArtsModalComponent,
    ArtsComponent,
    ReferModalComponent,
    ArtsSettingComponent,
    LoginComponent,
    ErrorComponent,
    TopComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    HeaderComponent,
    MyPageComponent,
    UserRegisterComponent,
    ItemSecretsComponent,
    BackgroundComponent,
    FormValidationNgComponent,
    GridComponent,
  ],
  providers: [DbService, DataShareService, LoginGuardGuard],
  entryComponents: [ReferModalComponent, ArtsModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
