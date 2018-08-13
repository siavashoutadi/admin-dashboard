import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from "rxjs/internal/Subscription";

import { DashboardService } from './dashboard.service';
import { SideNavMenuItem } from './models/sidenav-menu-item.models';
import { SideNavMenuItemChild } from './models/sidenav-items-child.models';

@Component({
  selector: 'siaout-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  defaultSideNavMenuItems: SideNavMenuItem[]
  sideNavMenuItems: SideNavMenuItem[];
  subscription: Subscription;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, router: Router, private dashboardService: DashboardService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    let items: SideNavMenuItem[]

    this.defaultSideNavMenuItems =
      [
        new SideNavMenuItem('Settings', 'settings', '',
          [
            new SideNavMenuItemChild('Edit Menu', 'dashboard/sidenav/menu/edit')
          ]
        )
      ]

    this.subscription = this.dashboardService.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        this.sideNavMenuItems = this.defaultSideNavMenuItems.concat(data);
      });

    this.dashboardService.onGetSideNavMenuItems();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
