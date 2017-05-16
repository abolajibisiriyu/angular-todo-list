import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";


const aboutRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
