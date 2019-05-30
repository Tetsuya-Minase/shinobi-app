import { NgModule } from '@angular/core';
import { MatDialogModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
