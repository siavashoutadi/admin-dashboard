import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { EditSideNavMenuComponent } from './edit-side-nav-menu/edit-side-nav-menu.component';
import { DeleteMenuItemComponent } from './delete-menu-item/delete-menu-item.component';
import { SideNavMenuItemsComponent } from './side-nav-menu-items/side-nav-menu-items.component';
import {
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule
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
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatDialogModule,
        CommonModule
    ],
    exports: [
        DashboardComponent,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        EditSideNavMenuComponent,
        DeleteMenuItemComponent,
        SideNavMenuItemsComponent
    ],
    entryComponents: [
        DeleteMenuItemComponent
    ],
    providers: [DashboardService]
})
export class DashboardModule { }
