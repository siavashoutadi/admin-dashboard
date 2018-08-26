import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'siaout-dashboard-theme',
  templateUrl: './dashboard-theme.component.html',
  styleUrls: ['./dashboard-theme.component.scss']
})
export class DashboardThemeComponent implements OnInit {
  theme: string = "indigo-pink-theme";
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  onApply() {
    this.dashboardService.changeTheme(this.theme);
  }
}
