import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { CoursesComponent } from './courses/courses.component';
import { ApiService } from './api.service';
import { Http } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    ApiService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
