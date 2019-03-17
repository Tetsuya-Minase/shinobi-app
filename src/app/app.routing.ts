import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CharacterDetailComponent} from './component/character-detail/character-detail.component';
import {LoginComponent} from './component/login/login.component';
import {ErrorComponent} from './component/error/error.component';
import {TopComponent} from './component/top/top.component';
import {CharacterListComponent} from './component/character-list/character-list.component';
import {MyPageComponent} from './component/my-page/my-page.component';
import {UserRegisterComponent} from './component/user-register/user-register.component';

const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'character', component: CharacterDetailComponent},
  {path: 'character-list', component: CharacterListComponent},
  {path: 'my-page', component: MyPageComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: '', component: TopComponent},
  {path: '**', component: ErrorComponent}
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
