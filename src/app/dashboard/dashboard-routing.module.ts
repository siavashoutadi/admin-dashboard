import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSideNavMenuComponent } from './edit-side-nav-menu/edit-side-nav-menu.component';
import { SideNavMenuItemsComponent } from './side-nav-menu-items/side-nav-menu-items.component';

const dashboardRoutes: Routes = [
    { path: 'dashboard/sidenav/menu/edit', component: EditSideNavMenuComponent },
    { path: 'dashboard/sidenav/menu/items', component: SideNavMenuItemsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
