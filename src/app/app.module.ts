import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FiltersComponent } from './filters/filters.component';
import { EditComponent } from './edit/edit.component';
//import { SpaModule } from 'src/spa/spa.module';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
// import {RouterModule} from 

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    InstructorsComponent,
    AboutComponent,
    ContactsComponent,
    RegistrationFormComponent,
    LoginComponent,
    ListComponent,
    FiltersComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    AutoCompleteModule,
    TableModule,
    HttpClientModule
    //SpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
