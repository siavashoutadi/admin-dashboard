import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

import { DashboardService } from '../dashboard.service';
import { SideNavMenuItem } from '../models/sidenav-menu-item.models';


@Component({
  selector: 'siaout-side-nav-menu-item-new',
  templateUrl: './side-nav-menu-item-new.component.html',
  styleUrls: ['./side-nav-menu-item-new.component.scss']
})

export class SideNavMenuItemNewComponent implements OnInit {
  newMenuItemForm: FormGroup;
  subscription: Subscription;
  sideNavMenuItems: SideNavMenuItem[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.subscription = this.dashboardService.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        this.sideNavMenuItems = data;
        this.initForms();
      });
  }

  initForms() {
    this.newMenuItemForm = new FormGroup({
      "id": new FormControl(Math.floor(Math.random() * Math.floor(100000000)).toString()),
      "title": new FormControl(null, Validators.required),
      "route": new FormControl(null, Validators.required),
      "icon": new FormControl(null, Validators.required),
      "children": new FormArray([])
    });
  }

  onNewMenuItemAdd(form: NgForm) {
    let item: SideNavMenuItem = this.newMenuItemForm.value;
    this.dashboardService.onAddSideNavMenuItem(item);
    form.resetForm();
  }

  onChildAddClick() {
    (<FormArray>this.newMenuItemForm.get('children')).push(
      new FormGroup({
        "id": new FormControl(Math.floor(Math.random() * Math.floor(100000000)).toString()),
        "title": new FormControl(null, Validators.required),
        "route": new FormControl(null, Validators.required)
      })
    );
  }
}
