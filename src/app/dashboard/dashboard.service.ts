import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

import { SideNavMenuItem } from './models/sidenav-menu-item.models';
import { SideNavMenuItemChild } from './models/sidenav-items-child.models';

@Injectable()
export class DashboardService {
  sideNavMenuItems = new BehaviorSubject<SideNavMenuItem[]>(undefined);
  subscription: Subscription;

  defaultTheme: string = "indigo-pink-theme";
  themeClass = new BehaviorSubject<string>(undefined);

  items: SideNavMenuItem[] = [
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

  onGetTheme() {
    this.themeClass.next(this.defaultTheme);
  }

  onGetSideNavMenuItems() {
    this.sideNavMenuItems.next(this.items);
  }

  onGetSideNavMenuItem(id: string) {
    return this.items.filter(item => item.id === id)[0]
  }

  onAddSideNavMenuItem(menuItem: SideNavMenuItem) {
    this.items = this.items.concat(menuItem);
    this.sideNavMenuItems.next(this.items);
  }

  onDeleteSideNavMenuItem(menuItemId: string) {
    this.items = this.items.filter(item => item.id !== menuItemId)
    this.sideNavMenuItems.next(this.items);
  }

  onDeleteSideNavSubMenuItem(menuItemId: string, submenuItemId: string) {
    let item = null;
    let itemIndex = null;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === menuItemId) {
        itemIndex = i;
        item = this.items[i];
        break;
      }
    }

    let submenuItemIndex = null;
    for (let i = 0; i < this.items[itemIndex].children.length; i++) {
      if (item.children[i].id === submenuItemId) {
        submenuItemIndex = i;
        break;
      }
    }

    this.items[itemIndex].children.splice(submenuItemIndex, 1);
    this.sideNavMenuItems.next(this.items);
  }

  onUpdateSideNavMenuItem(item: SideNavMenuItem) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        this.items[i] = item;
        break;
      }
    }
  }

  changeTheme(theme: string) {
    this.themeClass.next(theme);
  }
}
