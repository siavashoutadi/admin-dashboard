import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';

import { DeleteMenuItemDialogComponent } from '../delete-menu-item-dialog/delete-menu-item-dialog.component';

import { DashboardService } from '../dashboard.service';
import { SideNavMenuItem } from '../models/sidenav-menu-item.models';

@Component({
  selector: 'siaout-edit-side-nav-menu',
  templateUrl: './edit-side-nav-menu.component.html',
  styleUrls: ['./edit-side-nav-menu.component.scss']
})
export class EditSideNavMenuComponent implements OnInit {
  newMenuItemForm: FormGroup;
  editMenuItemsForm: FormGroup;
  sideNavMenuItems: SideNavMenuItem[];
  subscription: Subscription;
  editingMenuIndex: number;

  constructor(private dashboardService: DashboardService, public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.dashboardService.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        this.sideNavMenuItems = data;
        this.initForms();
      });
  }

  initForms() {
    this.newMenuItemForm = new FormGroup({
      "title": new FormControl(null, Validators.required),
      "route": new FormControl(null, Validators.required),
      "icon": new FormControl(null, Validators.required),
      "children": new FormArray([])
    });

    this.editMenuItemsForm = new FormGroup({
      "menuItems": this.getMenuItemsAsArray()
    });
  }

  getMenuItemsAsArray() {
    let items = new FormArray([])
    for (let i = 0; i < this.sideNavMenuItems.length; i++) {
      let item = this.sideNavMenuItems[i];
      items.push(new FormGroup({
        "title": new FormControl(item.title),
        "route": new FormControl(item.route),
        "icon": new FormControl(item.icon),
        "children": this.getItemChildren(item)
      }));
    }
    return items;
  }

  getItemChildren(item: SideNavMenuItem) {
    let items = new FormArray([])
    for (let i = 0; i < item.children.length; i++) {
      let child = item.children[i];
      items.push(new FormGroup({
        "title": new FormControl(child.title),
        "route": new FormControl(child.route)
      }));
    }
    return items;
  }

  onChildAddClick() {
    (<FormArray>this.newMenuItemForm.get('children')).push(
      new FormGroup({
        "title": new FormControl(null, Validators.required),
        "route": new FormControl(null, Validators.required)
      })
    );
  }

  onNewMenuItemAdd() {
    let sideNavMenuItem: SideNavMenuItem;
    sideNavMenuItem = this.newMenuItemForm.value;
    this.dashboardService.onSaveSideNavMenuItem(sideNavMenuItem);
  }

  onDeleteMenuItem(menuItemIndex: number) {
    let item = this.sideNavMenuItems[menuItemIndex];
    this.openDialog(item, null);
  }

  onDeleteSubMenuItem(menuItemIndex: number, submenuItemIndex: number) {
    let item = this.sideNavMenuItems[menuItemIndex];
    this.openDialog(item, submenuItemIndex);
    this.editingMenuIndex = menuItemIndex;
  }

  openDialog(item: SideNavMenuItem, subMenuIndex: number) {
    let itemTitle = item.title;
    if (subMenuIndex !== null) {
      itemTitle = item.children[subMenuIndex].title;
    }

    const dialogRef = this.dialog.open(DeleteMenuItemDialogComponent, {
      data: {
        itemTitle: itemTitle
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (subMenuIndex === null) {
          this.dashboardService.onDeleteSideNavMenuItem(item.id);
        } else {
          this.dashboardService.onDeleteSideNavSubMenuItem(item.id, item.children[subMenuIndex].id);
        }
      }
    });
  }
}
