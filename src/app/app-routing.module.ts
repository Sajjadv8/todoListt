import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SloginComponent } from './slogin/slogin.component';

const routes: Routes = [
  { path: 'List', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'sLogin', component: SloginComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
