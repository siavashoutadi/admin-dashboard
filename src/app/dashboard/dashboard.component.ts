import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
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
  themeClass: string;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private dashboardService: DashboardService,
    private overlayContainer: OverlayContainer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    let items: SideNavMenuItem[]

    this.defaultSideNavMenuItems =
      [
        new SideNavMenuItem('F90453EC712CE4505CC425E7E881E1D58EA274C3', 'Settings', 'settings', '',
          [
            new SideNavMenuItemChild('DAFE0B2EB1203BF19D1DE74D13ECE0A386F39D0D', 'Menu', 'dashboard/sidenav/menu/items'),
            new SideNavMenuItemChild('A797E30923AC1BE590300CE6B08E63B4E6DC6688', 'Theme', 'dashboard/theme')
          ]
        )
      ]

    this.subscription = this.dashboardService.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        this.sideNavMenuItems = this.defaultSideNavMenuItems.concat(data);
      });

    this.dashboardService.onGetSideNavMenuItems();

    this.subscription = this.dashboardService.themeClass.subscribe(
      (data: string) => {
        this.themeClass = data;
      });

    this.dashboardService.onGetTheme();

    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.themeClass);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
