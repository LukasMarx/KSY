import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutes } from './app.routing';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [AppComponent, EditComponent, QuizComponent, AddComponent, ListComponent, DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatIconModule,
    MatButtonModule,
    AppRoutes,
    QuillModule,
    FormsModule,
    MatListModule,
    MatDialogModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
