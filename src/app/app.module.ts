import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Components/test.component';
import { CourseComponent } from './Components/course/course.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { SummaryPipe } from './Pipes/summary.pipe';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { NewDirectiveDirective } from './Directives/new-directive.directive';
import { DrivenFormComponent } from './Components/driven-form/driven-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { PostsComponent } from './Components/posts/posts.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

import { FormComponent } from './Components/form/form.component';
import { LoginComponent } from './Components/login/login.component';

import { fakeBackendProvider } from './Helpers/fack.backend';
import { IdentityService } from './Services/identity.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminComponent } from './Components/admin/admin.component';
import { NoAccessComponent } from './Components/no-access/no-access.component';
import { LocalJsonComponent } from './Components/local-json/local-json.component';


@NgModule({

  declarations: [
    AppComponent,
    TestComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    NewDirectiveDirective,
    DrivenFormComponent,
    ReactiveFormComponent,
    TopicsComponent,
    PostsComponent,
    NavbarComponent,
    FormComponent,
    LoginComponent,
    AdminComponent,
    NoAccessComponent,
    LocalJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
