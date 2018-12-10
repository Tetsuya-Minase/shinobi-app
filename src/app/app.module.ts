import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule,MatToolbarModule, MatButtonModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DbService } from './service/db.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { ROUTES } from './app.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainGridComponent } from './component/main-grid/main-grid.component';
import { ModalComponent } from './modal/arts-modal/arts-modal.component';
import { ArtsComponent } from './component/arts/arts.component';
import { ArtssettingComponent } from './component/artssetting/artssetting.component';
import { BasicInformationComponent } from './component/basic-information/basic-information.component';
import { ReferModalComponent } from './modal/refer-modal/refer-modal.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { TopComponent } from './component/top/top.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { CharacterListComponent } from './component/character-list/character-list.component';
import { HeaderComponent } from './component/header/header.component';
import { MyPageComponent } from './component/my-page/my-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGridComponent,
    ModalComponent,
    ArtsComponent,
    ArtssettingComponent,
    BasicInformationComponent,
    ReferModalComponent,
    LoginComponent,
    ErrorComponent,
    TopComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    HeaderComponent,
    MyPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgGridModule.withComponents([]),
    ROUTES,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
