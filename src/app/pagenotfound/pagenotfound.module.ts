import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    PagenotfoundRoutingModule
  ],
  exports: [PagenotfoundRoutingModule],
  declarations: [PagenotfoundComponent]
})
export class PagenotfoundModule { }
