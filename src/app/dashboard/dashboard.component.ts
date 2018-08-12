import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'siaout-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  sideNavItems = [
    {
      "title": "Settings",
      "icon": "settings",
      "children": [
        {
          "title": "Edit Menu",
          "route": "dashboard/menu/edit"
        }
      ]
    },
    {
      "title": "Dashboard",
      "route": "/overview",
      "icon": "dashboard"
    },
    {
      "title": "Products",
      "icon": "work",
      "children": [
        {
          "title": "Add",
          "route": "products/add"
        },
        {
          "title": "Edit",
          "route": "products/edit"
        },
        {
          "title": "Delete",
          "route": "products/delete"
        }
      ]
    },
    {
      "title": "Users",
      "icon": "face",
      "children": [
        {
          "title": "Add",
          "route": "users/add"
        },
        {
          "title": "Edit",
          "route": "users/edit"
        },
        {
          "title": "Delete",
          "route": "users/delete"
        }
      ]
    }
  ];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
