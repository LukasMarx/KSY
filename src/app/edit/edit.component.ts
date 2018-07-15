import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Card } from '../model/card';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public card: Card;

  public quillModules = {
    toolbar: [['bold', 'italic', 'underline', 'strike'], [{ header: 1 }, { header: 2 }], ['link', 'image', 'video']]
  };

  constructor(public db: AngularFirestore, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.db
        .collection('cards')
        .doc(params['id'])
        .valueChanges()
        .subscribe(value => {
          this.card = <any>value;
        });
    });
  }

  public async onSave() {
    await this.db
      .collection('cards')
      .doc(this.card.id)
      .set(this.card);
    this.location.back();
  }
}
