import { DataShareService } from './service/data-share.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './common/module/material.module';
import { AppComponent } from './app.component';
import { DbService } from './service/db.service';
import { ROUTES } from './app.routing';
import { LoginGuardGuard } from './guard/login-guard.guard';

import { ArtsModalComponent } from './modal/arts-modal/arts-modal.component';
import { ReferModalComponent } from './modal/refer-modal/refer-modal.component';
import { ArtsComponent } from './modal/arts-modal/arts/arts.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducer/index.reducer';
import { CharacterListModule } from './page/character-list/character-list.module';
import { CharacterDetailModule } from './page/character-detail/character-detail.module';
import { ErrorModule } from './page/error/error.module';
import { LoginModule } from './page/login/login.module';
import { MyPageModule } from './page/my-page/my-page.module';
import { TopModule } from './page/top/top.module';
import { UserRegisterModule } from './page/user-register/user-register.module';
import { ServiceModule } from './service/service.module';
import { CommonComponentModule } from './common/component/common-component.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ROUTES,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    CharacterListModule,
    CharacterDetailModule,
    ErrorModule,
    LoginModule,
    MyPageModule,
    TopModule,
    UserRegisterModule,
    ServiceModule,
    CommonComponentModule,
  ],
  declarations: [
    AppComponent,
    ArtsModalComponent,
    ArtsComponent,
    ReferModalComponent,
  ],
  providers: [LoginGuardGuard],
  entryComponents: [ReferModalComponent, ArtsModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
