import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'siaout-delete-menu-item',
  templateUrl: './delete-menu-item.component.html',
  styleUrls: ['./delete-menu-item.component.scss']
})
export class DeleteMenuItemComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteMenuItemComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
