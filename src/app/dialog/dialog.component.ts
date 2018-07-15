import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../node_modules/@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit() {}

  onDelete() {
    this.dialogRef.close(true);
  }

  onAbort() {
    this.dialogRef.close(false);
  }
}
