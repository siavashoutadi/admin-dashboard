import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OverviewComponent } from './overview/overview.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    AuthModule,
    PagenotfoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
