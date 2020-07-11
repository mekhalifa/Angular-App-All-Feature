import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FormComponent } from './Components/form/form.component';
import { PostsComponent } from './Components/posts/posts.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { AuthGuard } from './Helpers/auth.guard';
import { AdminGuard } from './Helpers/admin.guard';
import { NoAccessComponent } from './Components/no-access/no-access.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent , canActivate: [AuthGuard]},
  {path: 'form', component: FormComponent, canActivate: [AuthGuard]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'topics', component: TopicsComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard , AdminGuard]},
  {path: 'no-access', component: NoAccessComponent},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
