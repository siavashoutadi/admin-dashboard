import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'siaout-delete-menu-item-dialog',
  templateUrl: './delete-menu-item-dialog.component.html',
  styleUrls: ['./delete-menu-item-dialog.component.scss']
})
export class DeleteMenuItemDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteMenuItemDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
