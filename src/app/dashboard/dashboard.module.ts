import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { EditSideNavMenuComponent } from './edit-side-nav-menu/edit-side-nav-menu.component';
import {
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule
} from '@angular/material';


@NgModule({
    imports: [
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatRippleModule,
        MatListModule,
        MatExpansionModule,
        RouterModule,
        DashboardRoutingModule,
        CommonModule
    ],
    exports: [
        DashboardComponent,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        EditSideNavMenuComponent
    ],
    providers: [DashboardService]
})
export class DashboardModule { }
