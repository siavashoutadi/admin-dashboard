import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    MatCardModule
  ],
  exports: [PagenotfoundRoutingModule],
  declarations: [PagenotfoundComponent]
})
export class PagenotfoundModule { }
