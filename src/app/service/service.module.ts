import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DbService} from './db.service';
import {DataShareService} from './data-share.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DbService, DataShareService]
})
export class ServiceModule { }
