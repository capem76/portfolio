import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './portfolio-components/projects/projects.component';
import { AboutComponent } from './portfolio-components/about/about.component';
import { ContactComponent } from './portfolio-components/contact/contact.component';
import { HeaderComponent } from './portfolio-components/header/header.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: "/home" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash:true})
  ]
})
export class AppRoutingModule { }
