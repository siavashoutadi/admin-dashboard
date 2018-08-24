import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DashboardService } from '../dashboard.service';
import { SideNavMenuItem } from '../models/sidenav-menu-item.models';


@Component({
  selector: 'siaout-side-nav-menu-item',
  templateUrl: './side-nav-menu-item.component.html',
  styleUrls: ['./side-nav-menu-item.component.scss']
})
export class SideNavMenuItemComponent implements OnInit {
  menuItem: SideNavMenuItem;

  constructor(private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.menuItem = this.dashboardService.onGetSideNavMenuItem(id);
  }

  onBack() {
    this.location.back();
  }
}
