import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public opened = false;

  constructor(private router: Router) {}

  navigateOverview() {
    this.router.navigate(['/list']);
    this.opened = false;
  }

  navigateQuiz() {
    this.router.navigate(['/quiz']);
    this.opened = false;
  }

  navigateSettings() {
    this.router.navigate(['/list']);
    this.opened = false;
  }
}
