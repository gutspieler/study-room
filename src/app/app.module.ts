import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { ApiService } from './services/api.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NewCourseComponent } from './courses/new-course/new-course.component';
import { CourseDataService } from './services/course-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailComponent,
    NewCourseComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    BrowserModule,
    FormsModule,
    CourseDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
