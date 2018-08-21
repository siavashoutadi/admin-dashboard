import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';

import { SideNavMenuItem } from '../models/sidenav-menu-item.models';
import { DashboardService } from '../dashboard.service';
import { DeleteMenuItemDialogComponent } from '../delete-menu-item-dialog/delete-menu-item-dialog.component';

@Component({
  selector: 'siaout-side-nav-menu-items',
  templateUrl: './side-nav-menu-items.component.html',
  styleUrls: ['./side-nav-menu-items.component.scss']
})
export class SideNavMenuItemsComponent implements OnInit {
  sideNavMenuItems: SideNavMenuItem[];
  subscription: Subscription;

  constructor(private dashboardService: DashboardService, private dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.dashboardService.sideNavMenuItems.subscribe(
      (data: SideNavMenuItem[]) => {
        this.sideNavMenuItems = data;
      });
    this.dashboardService.onGetSideNavMenuItems();
  }

  onDeleteMenuItem(item: SideNavMenuItem) {
    this.openDialog(item);
  }

  openDialog(item: SideNavMenuItem) {
    const dialogRef = this.dialog.open(DeleteMenuItemDialogComponent, {
      data: {
        itemTitle: item.title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dashboardService.onDeleteSideNavMenuItem(item.id);
      }
    });
  }
}
