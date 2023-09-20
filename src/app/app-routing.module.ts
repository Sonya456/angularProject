import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CoursesComponent } from './courses/courses.component'
import { AboutComponent } from './about/about.component'
import { ContactsComponent } from './contacts/contacts.component'
import { RegistrationFormComponent } from './registration-form/registration-form.component'
import { InstructorsComponent } from './instructors/instructors.component'
import { LoginComponent } from './login/login.component'
import { ListComponent } from './list/list.component';
import { FiltersComponent } from './filters/filters.component';
import { SpaBodyComponent } from 'src/spa/spa-body/spa-body.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'list', component: ListComponent},
  { path: 'spa-body', component: SpaBodyComponent},
  { path: 'filters', component: FiltersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

