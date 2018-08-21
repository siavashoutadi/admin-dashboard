import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SideNavMenuItem } from '../models/sidenav-menu-item.models';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'siaout-side-nav-menu-items',
  templateUrl: './side-nav-menu-items.component.html',
  styleUrls: ['./side-nav-menu-items.component.scss']
})
export class SideNavMenuItemsComponent implements OnInit {
  sideNavMenuItems: SideNavMenuItem[];
  subscription: Subscription;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.subscription = this.dashboardService.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        this.sideNavMenuItems = data;
      });
    this.dashboardService.onGetSideNavMenuItems();
  }
}
