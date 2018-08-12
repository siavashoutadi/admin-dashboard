import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
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
        CommonModule
    ],
    exports: [DashboardComponent],
    declarations: [
        DashboardComponent
    ],
    providers: [DashboardService]
})
export class DashboardModule { }
