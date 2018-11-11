import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideNavMenuItemsComponent } from './side-nav-menu-items/side-nav-menu-items.component';
import { SideNavMenuItemComponent } from './side-nav-menu-item/side-nav-menu-item.component';
import { SideNavMenuItemEditComponent } from './side-nav-menu-item-edit/side-nav-menu-item-edit.component';
import { SideNavMenuItemNewComponent } from './side-nav-menu-item-new/side-nav-menu-item-new.component';
import { DashboardThemeComponent } from './dashboard-theme/dashboard-theme.component';
import { AuthGuard } from '../auth/auth-guard.service';

const dashboardRoutes: Routes = [
    { path: 'dashboard/sidenav/menu/items', component: SideNavMenuItemsComponent, data: { roles: ["admin"] }, canActivate: [AuthGuard] },
    { path: 'dashboard/sidenav/menu/item/:id', component: SideNavMenuItemComponent, data: { roles: ["admin"] }, canActivate: [AuthGuard] },
    { path: 'dashboard/sidenav/menu/item/:id/edit', component: SideNavMenuItemEditComponent, data: { roles: ["admin"] }, canActivate: [AuthGuard] },
    { path: 'dashboard/sidenav/menu/items/new', component: SideNavMenuItemNewComponent, data: { roles: ["admin"] }, canActivate: [AuthGuard] },
    { path: 'dashboard/theme', component: DashboardThemeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
