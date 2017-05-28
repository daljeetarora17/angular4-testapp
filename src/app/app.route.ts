import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherComponent } from './teacher/teacher.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'first'
    
  },
 {path: 'first', component: TeacherComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }