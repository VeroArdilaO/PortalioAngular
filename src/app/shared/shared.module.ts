import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
