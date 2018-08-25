import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSideNavMenuComponent } from './edit-side-nav-menu/edit-side-nav-menu.component';
import { SideNavMenuItemsComponent } from './side-nav-menu-items/side-nav-menu-items.component';
import { SideNavMenuItemComponent } from './side-nav-menu-item/side-nav-menu-item.component';
import { SideNavMenuItemEditComponent } from './side-nav-menu-item-edit/side-nav-menu-item-edit.component';
import { SideNavMenuItemNewComponent } from './side-nav-menu-item-new/side-nav-menu-item-new.component';

const dashboardRoutes: Routes = [
    { path: 'dashboard/sidenav/menu/edit', component: EditSideNavMenuComponent },
    { path: 'dashboard/sidenav/menu/items', component: SideNavMenuItemsComponent },
    { path: 'dashboard/sidenav/menu/item/:id', component: SideNavMenuItemComponent },
    { path: 'dashboard/sidenav/menu/item/:id/edit', component: SideNavMenuItemEditComponent },
    { path: 'dashboard/sidenav/menu/items/new', component: SideNavMenuItemNewComponent }
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
