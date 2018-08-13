import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSideNavMenuComponent } from './edit-side-nav-menu/edit-side-nav-menu.component';

const dashboardRoutes: Routes = [
    { path: 'dashboard/sidenav/menu/edit', component: EditSideNavMenuComponent }
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
