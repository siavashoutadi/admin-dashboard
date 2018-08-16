import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { DashboardService } from '../dashboard.service';
import { SideNavMenuItem } from '../models/sidenav-menu-item.models';

@Component({
  selector: 'siaout-edit-side-nav-menu',
  templateUrl: './edit-side-nav-menu.component.html',
  styleUrls: ['./edit-side-nav-menu.component.scss']
})
export class EditSideNavMenuComponent implements OnInit {
  newMenuItemForm: FormGroup;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newMenuItemForm = new FormGroup({
      "title": new FormControl(null, Validators.required),
      "route": new FormControl(null, Validators.required),
      "icon": new FormControl(null, Validators.required),
      "children": new FormArray([])
    });
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
}
