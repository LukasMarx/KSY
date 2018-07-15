import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quiz',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
