import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { v4 } from 'uuid';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public card = {
    id: v4(),
    question: '',
    answer: ''
  };

  public quillModules = {
    toolbar: [['bold', 'italic', 'underline', 'strike'], [{ header: 1 }, { header: 2 }], ['link', 'image', 'video']]
  };

  constructor(public db: AngularFirestore, private router: Router) {}

  ngOnInit() {}

  public async onSave() {
    await this.db
      .collection('cards')
      .doc(this.card.id)
      .set(this.card);
    this.router.navigate(['/list']);
  }
}
