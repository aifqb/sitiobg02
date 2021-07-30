import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  exports:
  [
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
