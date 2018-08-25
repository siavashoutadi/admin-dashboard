import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


import { SideNavMenuItem } from '../models/sidenav-menu-item.models';
import { DashboardService } from '../dashboard.service';
import { DeleteMenuItemDialogComponent } from '../delete-menu-item-dialog/delete-menu-item-dialog.component';


@Component({
  selector: 'siaout-side-nav-menu-item-edit',
  templateUrl: './side-nav-menu-item-edit.component.html',
  styleUrls: ['./side-nav-menu-item-edit.component.scss']
})
export class SideNavMenuItemEditComponent implements OnInit {
  menuItem: SideNavMenuItem;
  editMenuItemsForm: FormGroup;

  constructor(private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.menuItem = this.dashboardService.onGetSideNavMenuItem(id)
    this.initForm();
  }

  initForm() {
    this.editMenuItemsForm = new FormGroup({
      "menuItem": new FormGroup({
        "id": new FormControl(this.menuItem.id),
        "title": new FormControl(this.menuItem.title),
        "route": new FormControl(this.menuItem.route),
        "icon": new FormControl(this.menuItem.icon),
        "children": this.getItemChildren(this.menuItem)
      })
    });
  }

  getItemChildren(item: SideNavMenuItem) {
    let items = new FormArray([])
    for (let i = 0; i < item.children.length; i++) {
      let child = item.children[i];
      items.push(new FormGroup({
        "id": new FormControl(child.id),
        "title": new FormControl(child.title),
        "route": new FormControl(child.route)
      }));
    }
    return items;
  }

  onEditMenuItem() {
    let item: SideNavMenuItem = this.menuItem;
    const editedItem: SideNavMenuItem = this.editMenuItemsForm.value.menuItem;
    item.icon = editedItem.icon;
    item.route = editedItem.route;
    item.title = editedItem.title;
    item.children.forEach(subMenu => {
      editedItem.children.forEach(editedSubMenu => {
        if (subMenu.id === editedSubMenu.id) {
          subMenu.route = editedSubMenu.route;
          subMenu.title = editedSubMenu.title;
        }
      });
    });
    this.dashboardService.onUpdateSideNavMenuItem(item);

    this.snackBar.open(item.title + " saved!", "close", {
      duration: 2000
    });
  }

  onDeleteSubMenuItem(item: SideNavMenuItem, submenuItemIndex: number) {
    this.openDialog(item, submenuItemIndex);
  }

  onBack() {
    this.location.back();
  }

  onDeleteMenuItem(item: SideNavMenuItem) {
    this.openDialog(item, null);
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
          this.router.navigate(['/dashboard', 'sidenav', 'menu', 'items']);
        } else {
          this.dashboardService.onDeleteSideNavSubMenuItem(item.id, item.children[subMenuIndex].id);
        }
      }
    });
  }
}
