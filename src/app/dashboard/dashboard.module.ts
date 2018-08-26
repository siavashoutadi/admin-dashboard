import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { DeleteMenuItemDialogComponent } from './delete-menu-item-dialog/delete-menu-item-dialog.component';
import { SideNavMenuItemsComponent } from './side-nav-menu-items/side-nav-menu-items.component';
import { SideNavMenuItemComponent } from './side-nav-menu-item/side-nav-menu-item.component';
import { SideNavMenuItemEditComponent } from './side-nav-menu-item-edit/side-nav-menu-item-edit.component';
import { SideNavMenuItemNewComponent } from './side-nav-menu-item-new/side-nav-menu-item-new.component';
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
    MatDialogModule,
    MatSnackBarModule
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
        MatSnackBarModule,
        CommonModule
    ],
    exports: [
        DashboardComponent,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        DeleteMenuItemDialogComponent,
        SideNavMenuItemsComponent,
        SideNavMenuItemComponent,
        SideNavMenuItemEditComponent,
        SideNavMenuItemNewComponent
    ],
    entryComponents: [
        DeleteMenuItemDialogComponent
    ],
    providers: [DashboardService]
})
export class DashboardModule { }
