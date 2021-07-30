import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash:true})
  ]
})
export class AppRoutingModule { }
