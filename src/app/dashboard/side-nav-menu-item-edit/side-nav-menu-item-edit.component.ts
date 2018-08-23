import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { SideNavMenuItem } from '../models/sidenav-menu-item.models';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'siaout-side-nav-menu-item-edit',
  templateUrl: './side-nav-menu-item-edit.component.html',
  styleUrls: ['./side-nav-menu-item-edit.component.scss']
})
export class SideNavMenuItemEditComponent implements OnInit {
  menuItem: SideNavMenuItem;
  editMenuItemsForm: FormGroup;

  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.menuItem = this.dashboardService.onGetSideNavMenuItem(id)
    this.initForm();
  }

  initForm() {
    this.editMenuItemsForm = new FormGroup({
      "menuItem": new FormGroup({
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
        "title": new FormControl(child.title),
        "route": new FormControl(child.route)
      }));
    }
    return items;
  }

  onEditMenuItem() {

  }

  onDeleteSubMenuItem() {

  }
}
