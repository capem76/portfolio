import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from '../portfolio-components/navbar/navbar.component';
import { HeaderComponent } from '../portfolio-components/header/header.component';
import { FeatureComponent } from '../portfolio-components/feature/feature.component';
import { AboutComponent } from '../portfolio-components/about/about.component';
import { SkillsComponent } from '../portfolio-components/about/skills/skills.component';
import { ProjectsComponent } from '../portfolio-components/projects/projects.component';
import { ContactComponent } from '../portfolio-components/contact/contact.component';
import { ChangeLangComponent } from '../portfolio-components/change-lang/change-lang.component';
import { ModalInfoProjectComponent } from './projects/modal-info-project/modal-info-project.component';

import {TranslateModule} from '@ngx-translate/core';
// MDB module
import { MdbModule } from '../mdb/mdb.module';
import { RouterModule } from '@angular/router';

// pipes
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';




@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FeatureComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ChangeLangComponent,
    ModalInfoProjectComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MdbModule,
    RouterModule,
    ReactiveFormsModule    
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
