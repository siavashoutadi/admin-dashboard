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
      new SideNavMenuItem('1', 'Dashboard', 'dashboard', '/overview', []),
      new SideNavMenuItem('2', 'Products', 'work', '',
        [
          new SideNavMenuItemChild('1', 'Add', 'products/add'),
          new SideNavMenuItemChild('2', 'Edit', 'products/edit'),
          new SideNavMenuItemChild('3', 'remove', 'products/remove')
        ]
      ),
      new SideNavMenuItem('3', 'Users', 'face', '',
        [
          new SideNavMenuItemChild('1', 'Add', 'users/add'),
          new SideNavMenuItemChild('2', 'Edit', 'users/edit'),
          new SideNavMenuItemChild('3', 'remove', 'users/remove')
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

  onDeleteSideNavMenuItem(menuItemId: string) {
    let items: SideNavMenuItem[];
    this.subscription = this.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        items = data;
      });

    this.sideNavMenuItems.next(items.filter(item => item.id !== menuItemId));
  }

  onDeleteSideNavSubMenuItem(menuItemId: string, submenuItemId: string) {
    let items: SideNavMenuItem[];
    this.subscription = this.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        items = data;
      });

    let item = null;
    let itemIndex = null;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === menuItemId) {
        itemIndex = i;
        item = items[i];
        break;
      }
    }

    let submenuItemIndex = null;
    for (let i = 0; i < items[itemIndex].children.length; i++) {
      if (item.children[i].id === submenuItemId) {
        submenuItemIndex = i;
        break;
      }
    }

    items[itemIndex].children.splice(submenuItemIndex, 1);
    this.sideNavMenuItems.next(items);
  }
}
