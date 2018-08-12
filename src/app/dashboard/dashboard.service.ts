import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

import { SideNavMenuItem } from './models/sidenav-menu-item.models';
import { SideNavMenuItemChild } from './models/sidenav-items-children.models';

@Injectable()
export class DashboardService {
  sideNavMenuItems = new BehaviorSubject<SideNavMenuItem[]>(undefined);

  onGetSideNavMenuItems() {
    let items: SideNavMenuItem[];
    items = [
      new SideNavMenuItem('Settings', 'settings', '',
        [
          new SideNavMenuItemChild('Edit Menu', 'dashboard/menu/edit')
        ]
      ),
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
}
