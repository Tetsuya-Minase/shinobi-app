import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CharacterDetailComponent} from './page/character-detail/component/character-detail.component';
import {MyPageComponent} from './page/my-page/component/my-page.component';
import {UserRegisterComponent} from './page/user-register/component/user-register.component';
import {CharacterListComponent} from './page/character-list/component/character-list.component';
import {LoginComponent} from './page/login/component/login.component';
import {TopComponent} from './page/top/component/top.component';
import {ErrorComponent} from './page/error/component/error.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'character', component: CharacterDetailComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'my-page', component: MyPageComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: '', component: TopComponent },
  { path: '**', component: ErrorComponent },
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
