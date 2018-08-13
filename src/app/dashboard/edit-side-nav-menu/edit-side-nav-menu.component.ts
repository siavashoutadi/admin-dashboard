import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siaout-edit-side-nav-menu',
  templateUrl: './edit-side-nav-menu.component.html',
  styleUrls: ['./edit-side-nav-menu.component.scss']
})
export class EditSideNavMenuComponent implements OnInit {
  childNum: number = 0;
  children: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onChildAddClick() {
    this.children.push(1);
  }
}
