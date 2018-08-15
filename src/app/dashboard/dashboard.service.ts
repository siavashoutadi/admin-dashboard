import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Subscription } from "rxjs/internal/Subscription";

import { SideNavMenuItem } from './models/sidenav-menu-item.models';
import { SideNavMenuItemChild } from './models/sidenav-items-child.models';

@Injectable()
export class DashboardService {
  sideNavMenuItems = new BehaviorSubject<SideNavMenuItem[]>(undefined);
  subscription: Subscription;

  onGetSideNavMenuItems() {
    let items: SideNavMenuItem[];
    items = [
      new SideNavMenuItem('Dashboard', 'dashboard', '/overview', []),
      new SideNavMenuItem('Products', 'work', '',
        [
          new SideNavMenuItemChild('Add', 'products/add'),
          new SideNavMenuItemChild('Edit', 'products/edit'),
          new SideNavMenuItemChild('remove', 'products/remove')
        ]
      ),
      new SideNavMenuItem('Users', 'face', '',
        [
          new SideNavMenuItemChild('Add', 'users/add'),
          new SideNavMenuItemChild('Edit', 'users/edit'),
          new SideNavMenuItemChild('remove', 'users/remove')
        ]
      )
    ]

    this.sideNavMenuItems.next(items);
  }

  onSaveSideNavMenuItem(menuItem: SideNavMenuItem) {
    let items: SideNavMenuItem[];
    items = [
      menuItem
    ]
    this.subscription = this.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        items = items.concat(data);
      });

    this.sideNavMenuItems.next(items);
  }
}
