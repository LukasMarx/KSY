import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs';
import { Card } from '../model/card';
import { MatDialog } from '../../../node_modules/@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public db: AngularFirestore, public dialog: MatDialog, private router: Router) {}

  public list: Observable<Card[]>;

  ngOnInit() {
    this.list = <any>this.db.collection('cards').valueChanges();
  }

  onDelete(event, card: Card) {
    event.preventDefault();
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.db
          .collection('cards')
          .doc(card.id)
          .delete();
      }
    });
  }

  onClicked(card: Card) {
    this.router.navigate(['/edit/' + card.id]);
  }
}
