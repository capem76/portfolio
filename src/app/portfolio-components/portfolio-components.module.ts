import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../portfolio-components/navbar/navbar.component';
import { HeaderComponent } from '../portfolio-components/header/header.component';
import { FeatureComponent } from '../portfolio-components/feature/feature.component';
import { AboutComponent } from '../portfolio-components/about/about.component';
import { SkillsComponent } from '../portfolio-components/about/skills/skills.component';
import { ProjectsComponent } from '../portfolio-components/projects/projects.component';
import { ContactComponent } from '../portfolio-components/contact/contact.component';
import { ChangeLangComponent } from '../portfolio-components/change-lang/change-lang.component';

import {TranslateModule} from '@ngx-translate/core';
// MDB module
import { MdbModule } from '../mdb/mdb.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FeatureComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ChangeLangComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MdbModule,
    RouterModule    
  ],
  exports : [
    NavbarComponent,
    HeaderComponent,
    FeatureComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ChangeLangComponent    
  ]
})
export class PortfolioComponentsModule { }
