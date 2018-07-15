import { Component, OnInit, HostListener } from '@angular/core';
import { Card } from '../model/card';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  public cards: Card[];
  public randomIndex = 0;
  public showAnswer = false;
  constructor(db: AngularFirestore) {
    db.collection('cards')
      .valueChanges()
      .subscribe(array => {
        console.log(array);
        this.cards = <any>array.map((x: any) => {
          return {
            id: x.id,
            question: x.question.replace(/^ +/gm, ''),
            answer: x.answer ? x.answer.replace(/^ +/gm, '').replace(/\t/g, '') : ''
          };
        });
        console.log(this.cards);
        this.randomIndex = Math.floor(Math.random() * (this.cards.length - 1));
      });
  }

  @HostListener('click', ['$event'])
  handleKeyboardEvent(kbdEvent: MouseEvent) {
    if (this.showAnswer) {
      this.showAnswer = false;
      this.randomIndex = Math.floor(Math.random() * (this.cards.length - 1));
    } else {
      this.showAnswer = true;
    }
  }
}
